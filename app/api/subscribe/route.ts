import { getPayload } from "payload"
import { NextResponse } from "next/server"
import config from "@payload-config"

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : ""

  if (!email || !email.includes("@")) {
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
