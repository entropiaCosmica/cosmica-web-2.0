import Image from 'next/image'
import Logo from '../public/logo/minimal-logo.png'
import CosmicPixelLogo from '../public/logo/cosmic-pixel_logo.png'
import CosmicPixelLogo2 from '../public/logo/cosmic-pixel_logo2.png'
import CosmicPixelLogoSVG from '../public/logo/cosmic-pixel_logo.svg'
import CosmicPixelLogoSVGorizontal from '../public/logo/cosmic-pixel_logo_h.svg'

function Header() {
  return (
    <header className="flex z-50 shadow-sm py-4 lg:px-2 justify-between top-0 fixed min-w-full bg-bg bg-opacity-70 backdrop-blur-md">
      <nav className="mx-8 lg:mx-10 flex justify-between relative w-full max-w-auto">

        {/** Logo */}
        <div className="flex justify-start lg:h-16 w-32 lg:w-36 items-center cursor-pointer">
          <Image
            src={CosmicPixelLogoSVGorizontal}
            alt="Cosmica Logo"
            layout=''
            objectFit='contain'
            objectPosition="left"
          />
        </div>

        {/** Nav Items */}
        <div className="hidden space-x-8 justify-end items-center navItem lg:inline-flex z-40">
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">01.</p>
            <p className="text-gray-300 hover:text-orange-text">About</p>
          </div>
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">02.</p>
            <p className="text-gray-300 hover:text-orange-text">Experience</p>
          </div>
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">03.</p>
            <p className="text-gray-300 hover:text-orange-text">Work</p>
          </div>
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">04.</p>
            <p className="text-gray-300 hover:text-orange-text">Contact</p>
          </div>
          <button className="border border-orange-border text-orange-text px-5 py-2.5 rounded-lg hover:bg-orange-bg hover:bg-opacity-20">Resume</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
