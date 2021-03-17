import { useReducer, useState } from 'react'
import KosmonautForm from './KosmonautForm'
import KosmonautTable from './KosmonautTable'

const defaultCosmonauts = [
  {
    name: 'Jurij',
    surname: 'Gagarin',
    birthDate: '1934-03-09',
    superpower: 'first',
  }
]

function KosmonautListing() {
  const [, forceUpdate ] = useReducer(x => x + 1, 0)
  // ^^^ https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  const localStorageKey = 'cosmonauts'
  const localStorageData = typeof window === 'undefined' ? null : window.localStorage.getItem(localStorageKey)
  const cosmonauts = localStorageData ? JSON.parse(localStorageData) : defaultCosmonauts

  const [ editedIndex, setEditedIndex ] = useState(null)

  const handleKosmnautFormSubmit = (cosmonaut) => {
    const newCosmonauts = [...cosmonauts]
    if (editedIndex === null) {
      newCosmonauts.push(cosmonaut)
    } else {
      newCosmonauts[editedIndex] = cosmonaut
    }
    window.localStorage.setItem(localStorageKey, JSON.stringify(newCosmonauts))
    setEditedIndex(null)
    forceUpdate()
  }

  const onEditClick = (index) => {
    setEditedIndex(index)
  }

  const onDeleteClick = (index) => {
    const newCosmonauts = [...cosmonauts]
    newCosmonauts.splice(index, 1)
    window.localStorage.setItem(localStorageKey, JSON.stringify(newCosmonauts))
    // the editedIndex (if set) has now become invalid so we clear it:
    setEditedIndex(null)
    forceUpdate()
  }

  return (
    <div>
      <KosmonautTable items={cosmonauts} onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
      <KosmonautForm
        key={editedIndex}
        isEdit={editedIndex !== null}
        value={editedIndex === null ? null : cosmonauts[editedIndex]}
        onSubmit={handleKosmnautFormSubmit}
        />
    </div>
  )
}

export default KosmonautListing
