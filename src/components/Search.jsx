import SearchIcon from '@mui/icons-material/Search'

import { useState, useEffect } from 'react'
function Search() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  useEffect(() => {}, [])

  return (
    <div>
      <div>
        <SearchIcon />
      </div>
      <input className=''></input>
      <button type='submit'></button>
    </div>
  )
}

export default Search
