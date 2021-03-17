import KosmonautForm from './KosmonautForm'

function KosmonautListing() {
  return (
    <div>
      <KosmonautForm onSubmit={v => console.debug(v)} />
    </div>
  )
}

export default KosmonautListing
