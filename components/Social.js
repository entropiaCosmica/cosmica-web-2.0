import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'

function Social() {
  return (
    <div className="fixed hidden lg:inline-block bottom-0 left-10 space-y-7 text-xl text-gray-300">
      <FiGithub className="hover:text-orange-text" />
      <FiInstagram className="hover:text-orange-text" />
      <FiTwitter className="hover:text-orange-text" />
      <FiLinkedin className="hover:text-orange-text" />
      <div className="relative left-2 ">
        <div className=" border-l-[1px] border-gray-300 h-[90px] " />
      </div>
    </div>
  )
}

export default Social
