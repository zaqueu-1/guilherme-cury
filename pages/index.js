import Head from 'next/head'
import Header from './components/Header'
import Links from './components/Links'
import Bio from './components/Bio'
import Bg from './components/Bg'
import Patients from './components/Patients'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Cury</title>
        <meta name="description" content="Guilherme Aziz Cury | Consultoria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Bg />
        <Header />
        <Links />
        <Bio />
        <Patients />
      </main>

    </div>
  )
}
