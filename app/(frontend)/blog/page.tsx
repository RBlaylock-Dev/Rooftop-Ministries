import { getPayload } from "payload"
import { draftMode } from "next/headers"
import Link from "next/link"
import config from "@payload-config"

export const dynamic = "force-dynamic"

export default async function BlogPage() {
  const { isEnabled: isDraftMode } = await draftMode()
  const payload = await getPayload({ config })

  const { docs: posts } = await payload.find({
    collection: "posts",
    depth: 1,
    draft: isDraftMode,
    overrideAccess: isDraftMode,
    sort: "-publishedAt",
    where: isDraftMode
      ? {}
      : {
          _status: {
            equals: "published",
          },
        },
  })

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Blog</h1>
            <p className="text-xl text-slate-600">Stories, encouragement, and updates from our community.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            {posts.length === 0 && <p className="text-slate-600 text-center">No posts published yet.</p>}
            {posts.map((post) => {
              const author = typeof post.author === "object" ? post.author : null
              return (
                <article key={post.id} className="border-b border-slate-200 pb-10">
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <h2 className="text-2xl font-semibold text-slate-900 group-hover:text-coral-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  {post.excerpt && <p className="text-slate-600 mt-3">{post.excerpt}</p>}
                  <div className="text-sm text-slate-500 mt-4">
                    {author?.name || author?.email || "Rooftop Ministries"}
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
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
