import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import { useState } from 'react'


export default function Home() {
  const [locations, setLocations] = useState([])

  function formHandler(e) {
    e.preventDefault();
    let locObj = {
      id: locations.length +1,
      location: e.target.location.value,
      mincust: e.target.mincust.value,
      maxcust: e.target.maxcust.value,
      avgcookies: e.target.avgcookies.value,
    }
    setLocations([...locations, locObj])
    e.target.reset()
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className='mx-16 flex flex-col text-center'>
        <CreateForm onSubmit={formHandler} />
        <ReportTable locations={locations}/>
      </main>
      <Footer count={locations.length}/>
    </>
  )
}
