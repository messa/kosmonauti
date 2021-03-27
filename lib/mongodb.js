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

export async function getDb() {
  const client = await clientPromise
  return client.db()
}
