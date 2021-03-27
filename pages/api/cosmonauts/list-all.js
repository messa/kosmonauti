import { getDb } from '../../../lib/mongodb'

export default async function handler(req, res) {
  try {
    const db = await getDb()
    const docs = await db.collection('cosmonauts').find().toArray()
    return res.status(200).json({
      cosmonauts: docs.map(doc => ({
        id: doc._id,
        name: doc.name,
        surname: doc.surname,
        birthDate: doc.birthDate,
        superpower: doc.superpower,
      }))
    })
  } catch (err) {
    return res.status(500).json({ error: `Exception caught: ${err}` })
  }
}
