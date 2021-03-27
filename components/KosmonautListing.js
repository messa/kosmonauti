import { useEffect, useState } from 'react'
import KosmonautForm from './KosmonautForm'
import KosmonautTable from './KosmonautTable'

function KosmonautListing() {
  const [ cosmonauts, setCosmonauts ] = useState(null)
  const [ editedId, setEditedId ] = useState(null)

  useEffect(async () => {
    const res = await fetch('/api/cosmonauts/list-all')
    const { cosmonauts } = await res.json()
    setCosmonauts(cosmonauts)
  }, [])

  const handleKosmnautFormSubmit = async (cosmonaut) => {
    if (editedId === null) {
      const res = await fetch('/api/cosmonauts/insert-new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cosmonaut }),
       })
      const { cosmonauts } = await res.json()
      setCosmonauts(cosmonauts)
    } else {
      const res = await fetch('/api/cosmonauts/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cosmonaut }),
       })
      const { cosmonauts } = await res.json()
      setCosmonauts(cosmonauts)
      setEditedId(null)
    }
  }

  const onEditClick = (cosmonautId) => {
    setEditedId(cosmonautId)
  }

  const onDeleteClick = (cosmonautId) => {
    // TODO: implement delete
    // the editedId (if set) has now become invalid so we clear it:
    setEditedId(null)
  }

  return (
    <div>
      {cosmonauts && (
        <KosmonautTable items={cosmonauts} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
      )}
      <KosmonautForm
        key={editedId}
        isEdit={editedId !== null}
        value={editedId === null ? null : cosmonauts.find(c => c.id === editedId)}
        onSubmit={handleKosmnautFormSubmit}
        />
    </div>
  )
}

export default KosmonautListing
