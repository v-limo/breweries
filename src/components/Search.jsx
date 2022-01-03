import _ from 'lodash'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import { options } from '../assets'

function Search({ setQuery, setData, data }) {
  const [input, setInput] = useState('')
  const [selected, setSelected] = useState('')

  useEffect(() => {
    const OrderBy = () => {
      const copyData = [...data]
      if (selected) {
        const newData = _.orderBy(copyData, [selected?.value])
        if (newData) {
          setData(newData)
          setSelected('')
        }
      }
    }
    OrderBy()
  }, [data, setData, selected])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      setQuery(input)
      setInput('')
      console.log('Query setted')
    } else console.log('No input')
  }

  return (
    <div className='flex justify-center space-x-5 align-center max-w-7xl'>
      <input
        className='px-5 rounded-md shadow-md ring-2'
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        className='px-4 uppercase bg-blue-400 rounded-md shadow-md ring-2'
        onClick={handleSubmit}
      >
        Search
      </button>

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
