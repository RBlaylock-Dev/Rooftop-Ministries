import { getPayload } from "payload"
import config from "../payload.config.mts"

const payload = await getPayload({ config })
const { docs } = await payload.find({ collection: "pages", where: { slug: { equals: "about" } }, depth: 1, draft: true })
const page = docs[0]
const teamBlock = (page.blocks || []).find((b: any) => b.blockType === "teamGrid")
console.log(JSON.stringify(teamBlock, null, 2))
process.exit(0)
