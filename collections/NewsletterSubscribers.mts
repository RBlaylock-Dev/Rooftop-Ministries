import type { CollectionConfig } from "payload"

export const NewsletterSubscribers: CollectionConfig = {
  slug: "newsletter-subscribers",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "subscribedAt", "status"],
  },
  access: {
    // anyone can subscribe (public form), only logged-in editors can view/manage the list
    create: () => true,
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
    },
    {
      name: "status",
      type: "select",
      defaultValue: "subscribed",
      options: [
        { label: "Subscribed", value: "subscribed" },
        { label: "Unsubscribed", value: "unsubscribed" },
      ],
    },
    {
      name: "subscribedAt",
      type: "date",
      defaultValue: () => new Date().toISOString(),
      admin: {
        position: "sidebar",
      },
    },
  ],
}
