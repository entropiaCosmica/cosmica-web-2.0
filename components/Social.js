import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'

function Social() {
  return (
    <div className="absolute bottom-0 left-10 space-y-6 text-xl text-white">
      <FiGithub className="hover:text-orange-text" />
      <FiInstagram className="hover:text-orange-text" />
      <FiTwitter className="hover:text-orange-text" />
      <FiLinkedin className="hover:text-orange-text" />
      <div className="relative left-2 ">
        <div className="border-l-[1px] border-white h-[90px] " />
      </div>
    </div>
  )
}

export default Social
