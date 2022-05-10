import { Link } from 'react-router-dom'

import LocationOnIcon from '@mui/icons-material/LocationOn'

import { BrewaryType } from '../types'
import ButtonComponent from './ButtonComponent'

type Props = {
  item: BrewaryType
}

function Card({ item }: Props) {
  const { name, brewery_type, city, country, state, website_url } = item
  return (
    <div className='p-10 mt-4 bg-gray-200 rounded-md shadow-md text-clip font-extralight '>
      <a
        className='external'
        rel='noreferrer'
        href={website_url || 'https://www.barrelbrothersbrewing.co'}
        target='_blank'
      >
        <h1 className='font-bold text-center underline uppercase'>{name}</h1>{' '}
        <br />
      </a>
      <p>Brewery Type: {brewery_type}</p> <br />
      <p>
        <LocationOnIcon />
        <span className='uppercase '>{city}</span>, {state} -
        {country === 'United States' ? '(USA)' : country}
      </p>
      <br />
      <Link to={`/${item.id}`}>
        <ButtonComponent label='More Details' />
      </Link>
    </div>
  )
}

export default Card
