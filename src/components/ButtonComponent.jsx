import { Button } from '@mui/material'

function ButtonComponent({ color, label }) {
  return (
    <div>
      <Button color={color} variant='contained'>
        {label}
      </Button>
    </div>
  )
}
export default ButtonComponent
