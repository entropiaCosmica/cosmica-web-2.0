import useWidth from '../hooks/useWidth'
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'

function Footer() {
  const getWidth = useWidth()
  return (
    <div className="justify-center flex flex-col text-center SFMono text-xs pb-8 text-gray-400 space-y-8">
      {
        getWidth < 1024
          ?
          <div className="space-y-5" >
            <div className="flex justify-center text-xl space-x-8">
              <div>
                <a href="https://www.github.com/entropiaCosmica" target="_blank" rel="noopener noreferrer" >
                  <FiGithub className="hover:text-orange-text hover:-translate-y-1 transition duration-200 ease-in-out" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/gelatina_cosmica/" target="_blank" rel="noopener noreferrer">
                  <FiInstagram className="hover:text-orange-text hover:-translate-y-1 transition duration-200 ease-in-out" />
                </a>
              </div>
              <div>
                <a href="https://twitter.com/gelatinaCosmica" target="_blank" rel="noopener noreferrer">
                  <FiTwitter className="hover:text-orange-text hover:-translate-y-1 transition duration-200 ease-in-out" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/zapata-santiago/" target="_blank" rel="noopener noreferrer">
                  <FiLinkedin className="hover:text-orange-text hover:-translate-y-1 transition duration-200 ease-in-out" />
                </a>
              </div>
            </div>
            <div>
              <a href="mailto:entropia@cosmica.dev">
                <p className="email hover:text-orange-text cursor-pointer hover:-translate-y-1 transition duration-200 ease-in-out">
                  entropia@cosmica.dev
                </p>
              </a>
            </div>
          </div>
          : null
      }
      <a className="hover:text-orange-text transition duration-300 ease-out w-fit self-center" href="http://www.github.com/entropiaCosmica" target="_blank" rel="noopener noreferrer">Designed & Built by Santiago Zapata</a>
    </div>
  )
}

export default Footer
