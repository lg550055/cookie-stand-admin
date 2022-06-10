import useResource from '../hooks/useResource'


export default function Footer() {

  const { resources } = useResource()
  
  return (
    <footer className='p-4 bg-green-500 text-center text-gray-50'>
    <p>{resources && resources.length} Locations World Wide</p>
    </footer>
  )
}
