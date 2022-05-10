import axios from 'axios'
import { useEffect, useState } from 'react'

import Card from '../components/Card'
import Search from '../components/Search'
import { BrewaryType } from '../types'

export default function Homepage() {
  const [data, setData] = useState<BrewaryType[] | []>([])
  const [query, setQuery] = useState('')
  const URL = 'https://api.openbrewerydb.org/breweries'
  const URL_WITH_QUERY = `https://api.openbrewerydb.org/breweries/search?query=${query}`

  useEffect(() => {
    const fetchData = async () => {
      if (query !== '') {
        const result = await axios(URL_WITH_QUERY)
        return setData(result.data)
      } else {
        const result = await axios(URL)
        return setData(result.data)
      }
    }
    fetchData()
  }, [query, URL_WITH_QUERY])

  return (
    <div className='w-screen min-h-screen mx-auto my-4 max-w-7xl'>
      <Search setQuery={setQuery} setData={setData} data={data} />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 '>
        {data && data.map((item) => <Card key={item.id} item={item} />)}
        {!data && <div> No records meeting the search creteria</div>}
      </div>
    </div>
  )
}
