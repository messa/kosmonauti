import Head from 'next/head'
import KosmonautListing from '../components/KosmonautListing'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Kosmonauti</title>
      </Head>
      <h1>Kosmonauti</h1>
      <KosmonautListing />
    </div>
  )
}

export default IndexPage
