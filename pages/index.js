import Head from 'next/head'
import KosmonautForm from '../components/KosmonautForm'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Kosmonauti</title>
      </Head>
      <h1>Kosmonauti</h1>

      <KosmonautForm onSubmit={v => console.debug(v)} />



    </div>
  )
}

export default IndexPage
