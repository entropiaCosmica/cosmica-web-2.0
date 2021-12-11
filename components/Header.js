import Image from 'next/image'
import Logo from '../public/logo/minimal-logo.png'

function Header() {
  return (
    <header className="top-0 z-50 shadow-sm p-4">
      <nav className="max-w-screen mx-10 grid grid-cols-2 ">

        {/** Logo */}
        <div className="relative h-16 w-[10em] cursor-pointer">
          <Image
            src={Logo}
            alt="Cosmica Logo"
            layout='fill'
            objectFit='contain'
            objectPosition="left"
          />
        </div>

        {/** Nav Items */}
        <div className="flex space-x-10 justify-end flex-grow items-center navItem">
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">01.</p>
            <p className="text-white hover:text-orange-text">About</p>
          </div>
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">02.</p>
            <p className="text-white hover:text-orange-text">Experience</p>
          </div>
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">03.</p>
            <p className="text-white hover:text-orange-text">Work</p>
          </div>
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text">04.</p>
            <p className="text-white hover:text-orange-text">Contact</p>
          </div>
          <button className="border border-orange-border text-orange-text px-4 py-2 rounded-md hover:bg-orange-bg hover:bg-opacity-20">Resume</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
