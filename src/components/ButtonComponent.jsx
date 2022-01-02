import { Button } from '@mui/material'

function ButtonComponent({ color, label }) {
  return (
    <Button color={color} variant='contained'>
      {label}
    </Button>
  )
}
export default ButtonComponent
