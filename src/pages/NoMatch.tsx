import React from 'react'
import { Link } from 'react-router-dom'

import ButtonComponent from '../components/ButtonComponent'

function NoMatch(): JSX.Element {
  return (
    <div className='flex justify-center h-screen font-sans uppercase align-center first-letter:font-extrabold'>
      404 page not found
      <Link to={'/'}>
        <ButtonComponent label='HomePage' />
      </Link>
      <Link to='/'>
        <ButtonComponent label='Back' />
      </Link>
    </div>
  )
}

export default NoMatch
