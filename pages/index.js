import { useAuth } from '../contexts/auth'
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'


export default function Home() {
  const { user, login } = useAuth()

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      {user ? 
        <main className='mx-16 flex flex-col text-center'>
          <CreateForm />
          <ReportTable locations={locations}/>
        </main>
        : <Login onLogin={login} />
      }
      <Footer />
    </>
  )
}
