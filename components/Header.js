import Link from "next/link";


export default function Header() {
  return (
    <header className='text-3xl p-4 bg-green-500 text-gray-50'>
      <span>Cookie Stand Admin</span>
      <Link href={'/about'}>
        <a className="float-right px-4 py-1.5 bg-blue-400 text-base text-gray-50 rounded-lg">About</a>
      </Link>
    </header>
  )
}
