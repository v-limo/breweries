import axios from 'axios'
import { useState, useEffect } from 'react'

export default function App() {
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
    <div className='text-md bg-gray-300 min-h-screen'>
      <ol>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    </div>
  )
}
