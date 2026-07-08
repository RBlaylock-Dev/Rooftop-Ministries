import { getPayload } from "payload"
import { NextResponse } from "next/server"
import config from "@payload-config"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_EMAIL_LENGTH = 254

// Best-effort per-instance rate limit. Not distributed, but blunts basic scripted abuse
// without pulling in an external rate-limiting service for a low-traffic newsletter form.
const submissionsByIp = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (submissionsByIp.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  timestamps.push(now)
  submissionsByIp.set(ip, timestamps)
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a minute." }, { status: 429 })
  }

  const body = await req.json().catch(() => null)
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : ""

  if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
  }

  const payload = await getPayload({ config })

  const existing = await payload.find({
    collection: "newsletter-subscribers",
    where: { email: { equals: email } },
    overrideAccess: true,
  })

  if (existing.docs[0]) {
    if (existing.docs[0].status !== "subscribed") {
      await payload.update({
        collection: "newsletter-subscribers",
        id: existing.docs[0].id,
        data: { status: "subscribed" },
        overrideAccess: true,
      })
    }
    return NextResponse.json({ ok: true })
  }

  await payload.create({
    collection: "newsletter-subscribers",
    data: { email, status: "subscribed" },
    overrideAccess: true,
  })

  return NextResponse.json({ ok: true })
}
