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
  const cosmonauts = defaultCosmonauts
  return (
    <div>
      <KosmonautTable items={cosmonauts} />
      <KosmonautForm onSubmit={v => console.debug(v)} />
    </div>
  )
}

export default KosmonautListing
