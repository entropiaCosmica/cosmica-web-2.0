import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'

function Social() {
  return (
    <div className="fixed hidden bottom-0 left-10 space-y-7 text-xl text-gray-300 lg:inline-grid">
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
      <div className="relative left-2 ">
        <div className=" border-l-[1px] border-gray-300 h-[90px] " />
      </div>
    </div>
  )
}

export default Social
