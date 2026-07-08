import type { PayloadRequest } from "payload"
import { getPayload } from "payload"

import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

import config from "@payload-config"

export async function GET(req: Request): Promise<Response> {
  const payload = await getPayload({ config })

  const { searchParams } = new URL(req.url)

  const path = searchParams.get("path")
  const previewSecret = searchParams.get("previewSecret")

  if (previewSecret !== process.env.PREVIEW_SECRET) {
    return new Response("You are not allowed to preview this page", {
      status: 403,
    })
  }

  if (!path) {
    return new Response("Insufficient search params", { status: 404 })
  }

  // Must be a same-site relative path. Reject anything that could be interpreted as a
  // protocol-relative or absolute URL (e.g. "//evil.com", "/\evil.com", "/\/evil.com"),
  // which browsers can treat as a redirect to an external host.
  if (!path.startsWith("/") || path.startsWith("//") || path.startsWith("/\\") || path.includes("://")) {
    return new Response("This endpoint can only be used for relative previews", { status: 500 })
  }

  let user

  try {
    user = await payload.auth({
      req: req as unknown as PayloadRequest,
      headers: req.headers,
    })
  } catch (error) {
    payload.logger.error({ err: error }, "Error verifying token for live preview")
    return new Response("You are not allowed to preview this page", {
      status: 403,
    })
  }

  const draft = await draftMode()

  if (!user) {
    draft.disable()
    return new Response("You are not allowed to preview this page", {
      status: 403,
    })
  }

  draft.enable()

  redirect(path)
}
