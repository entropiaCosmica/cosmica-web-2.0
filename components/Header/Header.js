import Image from 'next/image'
import CosmicPixelLogoSVGorizontal from '../../public/logo/cosmic-pixel_logo_h.svg'
import pdf from '../../static/Santiago_Zapata_CV.pdf'
import useWidth from '../../hooks/useWidth'
import { Link } from 'react-scroll'

const headerStyles = [
  'flex',
  'z-50',
  'shadow-sm',
  'py-4',
  'lg:px-2',
  'justify-between',
  'top-0',
  'min-w-full',
  'bg-bg',
  'bg-opacity-70',
  'backdrop-blur-md'
]
const strStyles = headerStyles.join(' ').toString()

function Header() {
  const getWidth = useWidth()

  const onResumeClick = () => {
    window.open(pdf);
  }

  return (
    <header className={`fixed flex z-50 shadow-sm py-4 lg:px-2 justify-between top-0 min-w-full bg-bg bg-opacity-80 backdrop-blur-md`}>
      <nav className="mx-8 lg:mx-10 flex justify-between relative w-full max-w-auto">
        {/** Logo */}
        <Link
          activeClass="active"
          to="start"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div className="flex justify-start lg:h-16 w-32 lg:w-36 items-center cursor-pointer">
            <Image
              src={CosmicPixelLogoSVGorizontal}
              alt="Cosmica Logo"
              // layout=''
              objectFit='contain'
              objectPosition="left"
            />
          </div>
        </Link>

        {/** Nav Items */}
        <div className="space-x-8 justify-end items-center navItem inline-flex z-40">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <div className="flex space-x-2 cursor-pointer">
              <p className="text-orange-text">01.</p>
              <p className="text-gray-300 hover:text-orange-text">About</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <div className="flex space-x-2 cursor-pointer">
              <p className="text-orange-text">02.</p>
              <p className="text-gray-300 hover:text-orange-text">Experience</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <div className="flex space-x-2 cursor-pointer">
              <p className="text-orange-text">03.</p>
              <p className="text-gray-300 hover:text-orange-text">Work</p>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <div className="flex space-x-2 cursor-pointer">
              <p className="text-orange-text">04.</p>
              <p className="text-gray-300 hover:text-orange-text">Contact</p>
            </div>
          </Link>
          <a onClick={onResumeClick} rel="noopener noreferrer" target="_blank">
            <button className="border border-orange-border text-orange-text px-5 py-2.5 rounded-lg hover:bg-orange-bg hover:bg-opacity-20 transition duration-200 ease-out">Resume</button>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
