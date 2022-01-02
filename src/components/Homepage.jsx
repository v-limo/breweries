import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'
import Search from './Search'

export default function Homepage() {
  const [data, setData] = useState([])
  const URL = 'https://api.openbrewerydb.org/breweries'
  const fetchData = async () => {
    const result = await axios(URL)
    setData(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  return (
    <div className='w-screen my-4 max-w-7xl mx-auto'>
      <Search />
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 '>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
