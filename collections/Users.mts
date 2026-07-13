import type { CollectionConfig } from "payload"

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  access: {
    // The collection itself is publicly readable so blog posts can show an author byline
    // (name), but individual fields below are locked down so PII (email) and role aren't
    // exposed to unauthenticated API requests.
    read: () => true,
  },
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
      access: {
        read: ({ req: { user } }) => Boolean(user),
      },
    },
    {
      name: "name",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: "editor",
      access: {
        read: ({ req: { user } }) => Boolean(user),
      },
      options: [
        { label: "Admin", value: "admin" },
        { label: "Editor", value: "editor" },
      ],
    },
  ],
}
