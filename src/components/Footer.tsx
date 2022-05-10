import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Footer() {
  const URLS = {
    ld: 'https://www.linkedin.com/in/vincentlimo/ ',
    gh: 'https://github.com/v-limo',
    mail: 'mailto: limovincenti@gmail.com',
  }

  return (
    <div className='flex justify-center w-screen bg-blue-200 align-center lg:px-40 '>
      <div className='p-[20px] flex justify-center align-center'>
        <p>Made with ❤️ </p>
      </div>

      <div className='flex justify-center p-5 rounded-full hover:bg-blue-50 align-center'>
        <a href={URLS.mail} target='_blank' rel='noopener noreferrer'>
          <EmailIcon />
        </a>
      </div>

      <div className='flex justify-center p-5 rounded-full hover:bg-blue-50 align-center'>
        <a href={URLS.ld} target='_blank' rel='noopener noreferrer'>
          <LinkedInIcon />
        </a>
      </div>
      <div className='flex justify-center p-5 rounded-full hover:bg-blue-50 align-center'>
        <a href={URLS.gh} target='_blank' rel='noopener noreferrer'>
          <GitHubIcon />
        </a>
      </div>
    </div>
  )
}
export default Footer
