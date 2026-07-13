import type { CollectionConfig } from "payload"
import { lexicalEditor } from "@payloadcms/richtext-lexical"

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    preview: (doc) => {
      const encodedParams = new URLSearchParams({
        slug: String(doc?.slug || ""),
        collection: "pages",
        path: doc?.slug === "home" ? "/" : `/${doc?.slug}`,
        previewSecret: process.env.PREVIEW_SECRET || "",
      })
      return `/next/preview?${encodedParams.toString()}`
    },
    livePreview: {
      url: ({ data }) => (data?.slug === "home" ? "/" : `/${data?.slug}`),
    },
  },
  versions: {
    drafts: true,
  },
  access: {
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
        description: "Matches the route, e.g. 'home', 'about', 'what-we-do', 'contact', 'newsletter'",
      },
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: [
        {
          slug: "hero",
          fields: [
            { name: "heading", type: "text", required: true },
            { name: "subheading", type: "textarea" },
          ],
        },
        {
          slug: "homeHero",
          fields: [
            { name: "headline", type: "text", required: true },
            { name: "greetingLine1", type: "text" },
            { name: "greetingLine2", type: "text" },
            { name: "body", type: "textarea" },
            { name: "buttonLabel", type: "text" },
            { name: "buttonHref", type: "text" },
            { name: "image", type: "upload", relationTo: "media" },
          ],
        },
        {
          slug: "testimonials",
          fields: [
            { name: "heading", type: "text" },
            { name: "subheading", type: "textarea" },
            { name: "buttonLabel", type: "text" },
            { name: "buttonHref", type: "text" },
          ],
        },
        {
          slug: "richtext",
          fields: [{ name: "content", type: "richText", editor: lexicalEditor() }],
        },
        {
          slug: "cardGrid",
          fields: [
            { name: "heading", type: "text" },
            { name: "subheading", type: "textarea" },
            {
              name: "background",
              type: "select",
              defaultValue: "slate",
              options: [
                { label: "Slate", value: "slate" },
                { label: "Blush", value: "blush" },
                { label: "White", value: "white" },
              ],
            },
            {
              name: "columns",
              type: "select",
              defaultValue: "3",
              options: [
                { label: "3", value: "3" },
                { label: "4", value: "4" },
              ],
            },
            {
              name: "cards",
              type: "array",
              fields: [
                { name: "icon", type: "text", admin: { description: "lucide-react icon name, e.g. Heart" } },
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea" },
                {
                  name: "items",
                  type: "array",
                  admin: { description: "Optional bullet list shown below the description." },
                  fields: [{ name: "text", type: "text", required: true }],
                },
              ],
            },
          ],
        },
        {
          slug: "cta",
          fields: [
            { name: "heading", type: "text", required: true },
            { name: "body", type: "textarea" },
            {
              name: "background",
              type: "select",
              defaultValue: "colored",
              options: [
                { label: "Colored", value: "colored" },
                { label: "Light", value: "light" },
              ],
            },
            { name: "buttonLabel", type: "text" },
            { name: "buttonHref", type: "text" },
            { name: "buttonLabel2", type: "text" },
            { name: "buttonHref2", type: "text" },
          ],
        },
        {
          slug: "approachGrid",
          fields: [
            { name: "heading", type: "text" },
            {
              name: "items",
              type: "array",
              fields: [
                { name: "heading", type: "text", required: true },
                { name: "body", type: "textarea" },
              ],
            },
          ],
        },
        {
          slug: "twoColumnText",
          fields: [
            {
              name: "columnOne",
              type: "group",
              fields: [
                { name: "heading", type: "text" },
                { name: "body", type: "textarea" },
              ],
            },
            {
              name: "columnTwo",
              type: "group",
              fields: [
                { name: "heading", type: "text" },
                { name: "body", type: "textarea" },
              ],
            },
          ],
        },
        {
          slug: "newsletterSignup",
          fields: [
            { name: "heading", type: "text" },
            { name: "body", type: "textarea" },
            {
              name: "variant",
              type: "select",
              defaultValue: "default",
              options: [
                { label: "Default (card)", value: "default" },
                { label: "Compact", value: "compact" },
                { label: "Inline (on colored background)", value: "inline" },
              ],
            },
          ],
        },
        {
          slug: "contactSection",
          fields: [
            { name: "formHeading", type: "text", defaultValue: "Send Us a Message" },
            { name: "address", type: "textarea" },
            { name: "phone", type: "text" },
            { name: "email", type: "text" },
            { name: "hours", type: "textarea" },
            { name: "noteHeading", type: "text" },
            { name: "noteBody", type: "textarea" },
          ],
        },
        {
          slug: "teamGrid",
          fields: [
            { name: "heading", type: "text" },
            {
              name: "members",
              type: "array",
              fields: [
                { name: "photo", type: "upload", relationTo: "media" },
                { name: "name", type: "text", required: true },
                { name: "title", type: "text" },
                { name: "bio", type: "textarea" },
                { name: "email", type: "text" },
                { name: "instagram", type: "text", admin: { description: "Full URL" } },
                { name: "facebook", type: "text", admin: { description: "Full URL" } },
              ],
            },
          ],
        },
        {
          slug: "faq",
          fields: [
            { name: "heading", type: "text" },
            {
              name: "items",
              type: "array",
              fields: [
                { name: "question", type: "text", required: true },
                { name: "answer", type: "textarea" },
              ],
            },
          ],
        },
      ],
    },
  ],
}
