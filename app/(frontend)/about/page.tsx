import { getPayload } from "payload"
import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import config from "@payload-config"
import { PageBlocks } from "@/components/page-blocks"
import { RefreshRouteOnSave } from "@/components/refresh-route-on-save"

export const dynamic = "force-dynamic"

export default async function AboutPage() {
  const { isEnabled: isDraftMode } = await draftMode()
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: "pages",
    depth: 1,
    draft: isDraftMode,
    overrideAccess: isDraftMode,
    limit: 1,
    where: {
      slug: {
        equals: "about",
      },
    },
  })

  const page = docs[0]

  if (!page) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {isDraftMode && <RefreshRouteOnSave />}
      <PageBlocks blocks={page.blocks || []} />
    </div>
  )
}
