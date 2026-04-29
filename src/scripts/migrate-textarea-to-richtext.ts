import { MongoClient } from 'mongodb'

const DATABASE_URI = process.env.DATABASE_URI
if (!DATABASE_URI) {
  console.error('DATABASE_URI not set')
  process.exit(1)
}

function textToLexical(text: string) {
  const lines = text.split('\n')
  return {
    root: {
      children: lines.map((line) => ({
        children: line
          ? [
              {
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text: line,
                type: 'text',
                version: 1,
              },
            ]
          : [],
        direction: line ? 'ltr' : null,
        format: '',
        indent: 0,
        type: 'paragraph',
        version: 1,
      })),
      direction: 'ltr',
      format: '',
      indent: 0,
      type: 'root',
      version: 1,
    },
  }
}

async function migrate(
  col: ReturnType<typeof MongoClient.prototype.db>['collection'] extends (name: string) => infer R
    ? R
    : never,
  fields: string[],
  label: string,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const docs = await (col as any).find({}).toArray()
  let count = 0
  for (const doc of docs) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updates: Record<string, any> = {}
    for (const field of fields) {
      if (typeof doc[field] === 'string') {
        updates[field] = textToLexical(doc[field])
      }
    }
    if (Object.keys(updates).length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (col as any).updateOne({ _id: doc._id }, { $set: updates })
      count++
    }
  }
  console.log(`${label}: ${count}/${docs.length} migrated`)
}

async function main() {
  const client = new MongoClient(DATABASE_URI!)
  await client.connect()

  // Payload names the DB from the connection URI — extract it
  const url = new URL(DATABASE_URI!)
  const dbName = url.pathname.replace(/^\//, '')
  const db = client.db(dbName)

  const collections = await db.listCollections().toArray()
  console.log('DB:', dbName)
  console.log('Collections:', collections.map((c) => c.name))

  const sampleEvent = await db.collection('events').findOne({})
  console.log('Sample event keys:', sampleEvent ? Object.keys(sampleEvent) : 'none')
  console.log('Sample event description type:', typeof sampleEvent?.description)
  console.log('Sample event description value:', JSON.stringify(sampleEvent?.description)?.slice(0, 100))

  await migrate(db.collection('events'), ['description', 'otherInfo'], 'Events')
  await migrate(db.collection('articles'), ['Descrizione'], 'Articles')
  await migrate(db.collection('quotes'), ['content'], 'Quotes')

  await client.close()
  console.log('Migration complete.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
