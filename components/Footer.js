import useWidth from '../hooks/useWidth'
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'

function Footer() {
  const getWidth = useWidth()
  return (
    <div className="justify-center flex flex-col text-center SFMono text-xs pb-8 text-gray-400 space-y-8">
      {
        getWidth <= 1024
          ? <div className="flex justify-center text-xl space-x-8">
            <FiGithub className="hover:text-orange-text" />
            <FiInstagram className="hover:text-orange-text" />
            <FiTwitter className="hover:text-orange-text" />
            <FiLinkedin className="hover:text-orange-text" />
          </div>
          : null
      }
      <a className="hover:text-orange-text transition duration-300 ease-out w-fit self-center" href="http://www.github.com/entropiaCosmica" target="_blank" rel="noopener noreferrer">Designed & Built by Santiago Zapata</a>
    </div>
  )
}

export default Footer
