import { getDb } from '../../../lib/mongodb'

export default async function handler(req, res) {
  try {
    if (!req.body) {
      return res.status(400).json({ error: 'No body received' })
    }
    // I will explicitly create newDoc field-by-field to avoid any potential security
    // issues when users could add an unexpected field to the req.body
    const newDoc = {
      name: req.body.cosmonaut.name,
      surname: req.body.cosmonaut.surname,
      birthDate: req.body.cosmonaut.birthDate,
      superpower: req.body.cosmonaut.superpower,
    }
    console.info('Inserting new cosmonaut:', newDoc)
    const db = await getDb()
    await db.collection('cosmonauts').insertOne(newDoc)
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
