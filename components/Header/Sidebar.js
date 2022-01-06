import { useState, useEffect } from 'react'
import Image from 'next/image'

import { HiMenuAlt3 } from 'react-icons/hi'
import { ImCross } from 'react-icons/im'
import CosmicPixelLogoSVGorizontal from '../../public/logo/cosmic-pixel_logo_h.svg'
import pdf from '../../static/Santiago_Zapata_CV.pdf'
import { Link } from 'react-scroll'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpen
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'scroll'
  }, [isOpen])

  const onResumeClick = () => {
    window.open(pdf);
  }

  return (
    <>
      <div className="w-full h-20 flex fixed bg-bg backdrop-blur-md bg-opacity-80 z-30">

        <Link
          activeClass="active"
          to="start"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div className="h-16 w-32 cursor-pointer relative left-6 top-2">
            <Image
              className=""
              src={CosmicPixelLogoSVGorizontal}
              alt="Cosmica Logo"
              layout='fill'
              objectFit='contain'
              objectPosition="left"
            />
          </div>
        </Link>

      </div>
      {isOpen
        ?
        <button
          className="fixed z-50 flex items-center cursor-pointer right-11 top-8 text-orange-text text-lg"
          onClick={() => setIsOpen(!isOpen)}>
          <ImCross />
        </button>
        :
        <button
          className="fixed z-40 flex items-center cursor-pointer right-10 top-6"
          onClick={() => setIsOpen(!isOpen)}>
          <HiMenuAlt3 className="text-orange-text text-3xl" />
        </button>
      }
      <div className={`top-0 right-0 w-[75vw] sm:w-[50vw] bg-light-gray-bg flex flex-col justify-center fixed h-full z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
        <ul className="space-y-8 block text-center SFMono">

          <li className="cursor-pointer">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <p className="text-orange-text text-sm">01.</p>
              <p className="text-gray-300 hover:text-orange-text">About</p>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <p className="text-orange-text text-sm">02.</p>
              <p className="text-gray-300 hover:text-orange-text">Experience</p>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <p className="text-orange-text text-sm">03.</p>
              <p className="text-gray-300 hover:text-orange-text">Work</p>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
            >
              <p className="text-orange-text text-sm">04.</p>
              <p className="text-gray-300 hover:text-orange-text">Contact</p>
            </Link>
          </li>
          <li className="pt-10">
            <a
              onClick={onResumeClick}
              rel="noopener noreferrer"
              target="_blank">
              <button className="border border-orange-border text-orange-text px-12 py-3 rounded-md hover:bg-orange-bg hover:bg-opacity-20 transition duration-200 ease-out">
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
      {
        isOpen
          ? <div
            className="w-full h-full fixed bg-bg bg-opacity-40 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(!isOpen)}
            onTouchMove={() => setIsOpen(!isOpen)} />
          : null
      }

    </>
  )
}

export default Sidebar
