import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './Card'
import Search from './Search'

export default function Homepage() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const [input, setInput] = useState('')
  const URL = 'https://api.openbrewerydb.org/breweries'
  const URL_WITH_QUERY = `https://api.openbrewerydb.org/breweries/search?query=${query}`
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URL)
      setData(result.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchQueryData = async () => {
      const result = await axios(URL_WITH_QUERY)
      setData(result.data)
    }
    fetchQueryData(URL_WITH_QUERY)
  }, [URL_WITH_QUERY])

  return (
    <div className='w-screen min-h-screen mx-auto my-4 max-w-7xl'>
      <Search />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
        {data && data.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  )
}
