const MongoClient = require('mongodb').MongoClient;

export default async function handler(req, res) {
  try {
    const uri = process.env.MONGODB_URI
    if (!uri) {
      return res.status(500).json({ error: 'MONGODB_URI is not configured' })
    }
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
      await client.connect()
      const db = await client.db()
      await db.collection('things').insertOne({ hello: 'World!' })
      const collections = await db.listCollections({}, { nameOnly: true }).toArray()
      const { databases } = await db.admin().listDatabases()
      return res.status(200).json({
        databases,
        dbStats: await db.stats(),
        collections: collections
      })
    } finally {
      client.close()
    }
  } catch (err) {
    return res.status(500).json({ error: `Exception caught: ${err}` })
  }
}
