import Link from "next/link";
import { useAuth } from '../contexts/auth'
  

export default function Header() {

  const { user, logout } = useAuth()

  return (
    <header className='text-2xl p-4 bg-green-500 text-gray-50'>
      <span>Cookie Stand Admin</span>
      <Link href={'/about'}>
        <a className="float-right px-4 py-1 bg-blue-400 text-base text-gray-50 rounded-lg">About</a>
      </Link>
      {user && <button 
        onClick={()=>logout()}
        className="float-right mr-4 px-4 py-1 bg-blue-400 text-base text-gray-50 rounded-lg">
        Logout</button>}
    </header>
  )
}
