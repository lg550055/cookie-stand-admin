import Head from 'next/head'
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
        <InputForm onSubmit={formHandler} />
        <p>Report Table Coming Soon...</p>
        <br></br>
        <p>'location':{location}, 'minCustomers':{minCust}, 'maxCustomers':{maxCust}, 'avgCookies':{avgCks}</p>
        <br></br>
      </main>
      <footer className='p-4 bg-green-500 text-gray-50'>
        <p>&copy;2022</p>
      </footer>    
    </>
  )
}

function Header() {
  return <header className='text-3xl p-4 bg-green-500 text-gray-50'>
    <h1>Cookie Stand Admin</h1>
  </header>
}

function InputForm(props) {
  return (
    <form onSubmit={props.onSubmit} className='my-6 px-4 bg-green-500 text-gray-50 rounded-lg'>
      <fieldset>
        <legend className='text-2xl py-4'>Create Cookie Stand</legend>
        <label>Location</label>
        <input name='location' className='w-1/2 text-black px-2' required />
        <br></br>
        <div className='inline-block px-2 py-6'>
          <label>Minimum Customers per Hour</label><br></br>
          <input name='mincust' type='number' required className='text-black px-2'/>
        </div>
        <div className='inline-block px-2 py-6'>
          <label>Maximum Customers per Hour</label><br></br>
          <input name='maxcust' type='number' required className='text-black px-2'/>
        </div>
        <div className='inline-block px-2 py-6'>
          <label>Average Cookies per Sale</label><br></br>
          <input name='avgcookies' type='number' required className='text-black px-2'/>
        </div>
        <div className='inline-block px-2 py-6'>
          <button type='submit' className='bg-blue-400 px-8 rounded-lg'>Create</button>
        </div>
      </fieldset>
    </form>
  )
}