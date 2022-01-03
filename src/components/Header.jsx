import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='sticky top-0 z-10 flex justify-between w-screen h-16 px-40 bg-blue-200 shadow-sm align-center'>
      <div className='mt-2 font-serif text-3xl text-blue-900 uppercase duration-150 cursor-pointerhover:overline hover:underline overline accent-indigo-300 underline-offset-8'>
        <Link to='/'>Brewery</Link>
      </div>
      <div className='flex justify-between align-baseline'>
        <div className='p-4 uppercase cursor-pointer hover:overline'>
          <Link to='/map'>Map</Link>
        </div>
        <div className='p-4 uppercase cursor-pointer hover:overline'>
          <Link to='/pagination'>pagination</Link>
        </div>
        <div className='p-4 uppercase cursor-pointer hover:overline'>
          <Link to='/about'>About</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
