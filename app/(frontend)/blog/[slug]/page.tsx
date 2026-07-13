import { getPayload } from "payload"
import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import { RichText } from "@payloadcms/richtext-lexical/react"
import type { Metadata } from "next"
import config from "@payload-config"
import { RefreshRouteOnSave } from "@/components/refresh-route-on-save"

export const dynamic = "force-dynamic"

async function getPost(slug: string) {
  const { isEnabled: isDraftMode } = await draftMode()
  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: "posts",
    depth: 1,
    draft: isDraftMode,
    overrideAccess: isDraftMode,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return { post: docs[0], isDraftMode }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { post } = await getPost(slug)

  if (!post) return {}

  const socialImage = typeof post.socialImage === "object" ? post.socialImage : null
  const socialImageUrl = socialImage?.sizes?.social?.url || socialImage?.url

  return {
    title: post.title,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      images: socialImageUrl ? [{ url: socialImageUrl, width: 1200, height: 630 }] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { post, isDraftMode } = await getPost(slug)

  if (!post) {
    notFound()
  }

  const author = typeof post.author === "object" ? post.author : null

  return (
    <div className="flex flex-col min-h-screen">
      {isDraftMode && <RefreshRouteOnSave />}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{post.title}</h1>
            <div className="text-sm text-slate-500 mb-10">
              Posted by {author?.name || author?.email || "Rooftop Ministries"}
              {post.publishedAt && (
                <>
                  {" · "}
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </>
              )}
              {isDraftMode && (
                <span className="ml-3 inline-block rounded bg-amber-100 text-amber-800 px-2 py-0.5 text-xs font-medium">
                  Draft preview
                </span>
              )}
            </div>
            {post.content && (
              <div className="prose max-w-none">
                <RichText data={post.content} />
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  )
}
