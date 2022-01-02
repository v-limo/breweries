import ButtonComponent from './ButtonComponent'
import { Link } from 'react-router-dom'

function Card({ item }) {
  console.log(item)
  const { name, brewery_type, city, country ,state, website_url } = item
  return (
    <div className='p-5 mt-4 text-clip bg-gray-200 rounded-md shadow-md font-extralight '>
      <a class='external' rel='noreferrer' href={website_url} target='_blank'>
        <h1 className='text-center underline font-bold uppercase'>{name}</h1>{' '}
        <br />
      </a>
      <p>Brewery Type: {brewery_type}</p> <br />
      <p>
        City : {city}, {state}, {country}
      </p>
      <br />
      {/* <Link to='/dashboard'> */}
      <ButtonComponent label='More Details' color='primary' />
      {/* </Link> */}
    </div>
  )
}

export default Card
