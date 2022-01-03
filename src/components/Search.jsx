import SearchIcon from '@mui/icons-material/Search'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { options } from '../assets'

function Search({ SetQuery, setData, data }) {
  const [input, setInput] = useState('')
  const [selected, setSelected] = useState('')

  // useEffect(() => {
  //   const OrderBy = () => {
  //     const copyData = [...data]
  //     if (selected) {
  //       const newData = _.orderBy(copyData, [selected?.value])
  //       if (newData) {
  //         setData(newData)
  //       }
  //     }
  //   }
  //   OrderBy()
  // }, [data, setData, selected])

  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      SetQuery(input)
      setInput('')
      console.log('Query set')
    } else console.log('No input')
  }

  return (
    <div className='flex w-screen align-center max-w-7xl'>
      <input
        className='px-6 rounded-md shadow-md ring-2'
        onChange={(e) => setInput(e.target.value)}
      />

      <div className='px-6 bg-blue-400 rounded-md shadow-md ring-2'>
        <button onClick={(e) => handleSubmit}>Search</button>
      </div>

      <div>Order By : </div>

      <Select
        defaultValue={selected}
        onChange={setSelected}
        options={options}
      />
    </div>
  )
}

export default Search
