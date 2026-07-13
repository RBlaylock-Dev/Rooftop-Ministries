import type { CollectionConfig } from "payload"
import { lexicalEditor } from "@payloadcms/richtext-lexical"

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "author", "_status", "publishedAt"],
    preview: (doc) => {
      const encodedParams = new URLSearchParams({
        slug: String(doc?.slug || ""),
        collection: "posts",
        path: `/blog/${doc?.slug}`,
        previewSecret: process.env.PREVIEW_SECRET || "",
      })
      return `/next/preview?${encodedParams.toString()}`
    },
    livePreview: {
      url: ({ data }) => `/blog/${data?.slug}`,
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 1000,
      },
    },
    maxPerDoc: 20,
  },
  access: {
    // published posts are public; drafts only visible to logged-in editors
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        _status: {
          equals: "published",
        },
      }
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        description: "URL path, e.g. weekly-encouragement-july-5",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor(),
      required: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description: "Shown at the top of the blog post itself.",
      },
    },
    {
      name: "socialImage",
      type: "upload",
      relationTo: "media",
      admin: {
        description:
          "Image used when this post is shared on social media (Facebook, Twitter/X, etc). Automatically cropped to the standard 1200x630 social size — upload any image and Payload will generate the right size.",
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      defaultValue: ({ user }: { user?: { id: string } }) => user?.id,
      admin: {
        description: "Who wrote/is publishing this post — shown on the blog page.",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        description: "Set automatically when first published; editable if you need to backdate.",
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value, operation, originalDoc }) => {
            if (value) return value
            if (operation === "update" && siblingData._status === "published" && !originalDoc?.publishedAt) {
              return new Date().toISOString()
            }
            return value
          },
        ],
      },
    },
  ],
}
