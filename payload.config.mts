import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import path from "path"
import { fileURLToPath } from "url"
import { buildConfig } from "payload"
import sharp from "sharp"

import { Users } from "./collections/Users.mts"
import { Media } from "./collections/Media.mts"
import { Pages } from "./collections/Pages.mts"
import { Posts } from "./collections/Posts.mts"
import { NewsletterSubscribers } from "./collections/NewsletterSubscribers.mts"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Pages, Posts, NewsletterSubscribers],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
})
