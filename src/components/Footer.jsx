import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

function Footer() {
  const URLS = {
    ld: 'https://www.linkedin.com/in/vincentlimo/ ',
    gh: 'https://github.com/v-limo',
    mail: 'mailto: limovincenti@gmail.com',
    ig: 'https://www.instagram.com/',
    tw: 'https://twitter.com/Vincent_K_Limo',
  }

  return (
    <div className='flex justify-between w-screen bg-blue-200 align-center lg:px-40 '>
      <div className='p-[20px] flex justify-center align-center'>
        <p>Made with ❤️</p>
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
      <div className='flex justify-center p-5 rounded-full hover:bg-blue-50 align-center'>
        <a href={URLS.tw} target='_blank' rel='noopener noreferrer'>
          <TwitterIcon />
        </a>
      </div>
      <div className='flex justify-center p-5 rounded-full hover:bg-blue-50 align-center'>
        <a href={URLS.ig} target='_blank' rel='noopener noreferrer'>
          <InstagramIcon />
        </a>
      </div>
      <div className=' p-[20px] flex justify-center align-center'>
        ©{new Date().getFullYear()} Vincent Limo
      </div>
    </div>
  )
}
export default Footer
