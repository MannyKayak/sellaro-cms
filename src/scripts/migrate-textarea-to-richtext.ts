import { getPayload } from 'payload'
import config from '@payload-config'

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

async function main() {
  const payload = await getPayload({ config })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = (payload.db as any).connection.db

  // --- Events: description + otherInfo ---
  const eventsCol = db.collection('events')
  const events = await eventsCol.find({}).toArray()
  let eventCount = 0
  for (const doc of events) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updates: Record<string, any> = {}
    if (typeof doc.description === 'string') {
      updates.description = textToLexical(doc.description)
    }
    if (typeof doc.otherInfo === 'string') {
      updates.otherInfo = textToLexical(doc.otherInfo)
    }
    if (Object.keys(updates).length > 0) {
      await eventsCol.updateOne({ _id: doc._id }, { $set: updates })
      eventCount++
    }
  }
  console.log(`Events migrated: ${eventCount}/${events.length}`)

  // --- Articles: Descrizione ---
  const articlesCol = db.collection('articles')
  const articles = await articlesCol.find({}).toArray()
  let articleCount = 0
  for (const doc of articles) {
    if (typeof doc.Descrizione === 'string') {
      await articlesCol.updateOne(
        { _id: doc._id },
        { $set: { Descrizione: textToLexical(doc.Descrizione) } },
      )
      articleCount++
    }
  }
  console.log(`Articles migrated: ${articleCount}/${articles.length}`)

  // --- Quotes: content ---
  const quotesCol = db.collection('quotes')
  const quotes = await quotesCol.find({}).toArray()
  let quoteCount = 0
  for (const doc of quotes) {
    if (typeof doc.content === 'string') {
      await quotesCol.updateOne(
        { _id: doc._id },
        { $set: { content: textToLexical(doc.content) } },
      )
      quoteCount++
    }
  }
  console.log(`Quotes migrated: ${quoteCount}/${quotes.length}`)

  console.log('Migration complete.')
  process.exit(0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
