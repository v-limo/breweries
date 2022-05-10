import { Button } from '@mui/material'

type Props = {
  label: string
}

function ButtonComponent({ label }: Props) {
  return (
    <Button color={'primary'} variant='contained'>
      {label}
    </Button>
  )
}
export default ButtonComponent
