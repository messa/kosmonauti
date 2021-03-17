import { useReducer } from 'react'
import KosmonautForm from './KosmonautForm'
import KosmonautTable from './KosmonautTable'

const defaultCosmonauts = [
  {
    name: 'Jurij',
    surname: 'Gagarin',
    superpower: 'first',
  }
]

function KosmonautListing() {
  const [, forceUpdate ] = useReducer(x => x + 1, 0)
  // ^^^ https://reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate
  const localStorageKey = 'cosmonauts'
  const localStorageData = typeof window === 'undefined' ? null : window.localStorage.getItem(localStorageKey)
  const cosmonauts = localStorageData ? JSON.parse(localStorageData) : defaultCosmonauts
  const handleKosmnautFormSubmit = (cosmonaut) => {
    const newCosmonauts = [...cosmonauts, cosmonaut]
    window.localStorage.setItem(localStorageKey, JSON.stringify(newCosmonauts))
    forceUpdate()
  }
  return (
    <div>
      <KosmonautTable items={cosmonauts} />
      <KosmonautForm onSubmit={handleKosmnautFormSubmit} />
    </div>
  )
}

export default KosmonautListing
