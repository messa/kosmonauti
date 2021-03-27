import { MongoClient } from 'mongodb'

async function getClient() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI is not configured')
  }
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  await client.connect()
  return client
}

const clientPromise = getClient()

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const db = client.db()
    await db.collection('things').insertOne({ hello: 'World!' })
    const collections = await db.listCollections({}, { nameOnly: true }).toArray()
    const { databases } = await db.admin().listDatabases()
    return res.status(200).json({
      databases,
      dbStats: await db.stats(),
      collections: collections
    })
  } catch (err) {
    return res.status(500).json({ error: `Exception caught: ${err}` })
  }
}
