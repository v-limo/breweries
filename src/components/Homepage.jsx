import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'

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
    <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto'>
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}
