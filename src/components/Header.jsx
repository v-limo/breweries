function Header() {
  return (
    <div className='flex align-center justify-evenly h-16 max-w-7xl  w-[100%] bg-blue-200 sticky top-0 z-10'>
      <div className='font-serif self-start mt-2 text-3xl text-orange-600 uppercase animate-pulse accent-indigo-300'>
        Brewery
      </div>
      <div>Map</div>
      <div>App Bar</div>
    </div>
  )
}

export default Header
