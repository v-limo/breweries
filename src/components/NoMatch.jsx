import React from 'react'
import { Link } from 'react-router-dom'
import ButtonComponent from './ButtonComponent'

function NoMatch() {
  return (
    <div className='flex justify-center h-screen font-sans uppercase align-center first-letter:font-extrabold'>
      404 page not found
      <Link to={'/'}>
        <ButtonComponent label='HomePage' color='primary' />
      </Link>
      <Link to='/'>
        <ButtonComponent label='Back' color='primary' />
      </Link>
    </div>
  )
}

export default NoMatch
