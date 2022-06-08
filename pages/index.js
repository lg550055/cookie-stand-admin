import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main>
        <form>
          <input/>
          <input/>
          <input/>
          <input/>
          <button type='submit'>Create</button>
        </form>
        <p>Report Table Coming Soon...</p>
        <p></p>
      </main>
      <footer className='p-4 bg-green-500 text-gray-50'>
        <p>&copy;2022</p>
      </footer>    
    </>
  )
}

function Header() {
  return <header className='text-4xl p-4 bg-green-500 text-gray-50'>
    <h1>Cookie Stand Admin</h1>
  </header>
}