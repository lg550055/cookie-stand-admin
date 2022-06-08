import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import { useState } from 'react'


export default function Home() {

  const [location, setLocation] = useState('location')
  const [minCust, setMinCust] = useState(0)
  const [maxCust, setMaxCust] = useState(0)
  const [avgCks, setAvgCks] = useState(0)

  function formHandler(e) {
    e.preventDefault();
    setLocation(e.target.location.value)
    setMinCust(e.target.mincust.value)
    setMaxCust(e.target.maxcust.value)
    setAvgCks(e.target.avgcookies.value)
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
        <ReportTable />
      </main>
      <Footer count={5}/>
    </>
  )
}
