import ButtonComponent from './ButtonComponent'

function Card({ item }) {
  console.log(item)
  const { name, brewery_type, city, state } = item
  return (
    <div className='  bg-gray-200 p-6 font-extralight   shadow-md rounded-md hover:transition duration-700 ease-in-out'>
      <h1>Name: {name}</h1> <br />
      <p>brewery Type: {brewery_type}</p> <br />
      <p>
        City : {city}, {state}
      </p>
      <br />
      <ButtonComponent label='More Details' color='primary' />
    </div>
  )
}

export default Card
