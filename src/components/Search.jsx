import SearchIcon from '@mui/icons-material/Search'

import ButtonComponent from './ButtonComponent'
function Search() {
  const Submit = (e) => {
    e.preventDefault()
    window.alert('')
  }

  console.log(input)

  return (
    <div>
      <div>
        <SearchIcon />
      </div>
      <input onChange={(e) => setInput(e.target.value)} className=''></input>
      <div>
        <ButtonComponent
          onClick={(e) => Submit}
          label='Search'
          color='secondary'
        />
      </div>
    </div>
  )
}

export default Search
