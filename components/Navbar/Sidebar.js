import { useState, useEffect } from 'react'

import NavItem from './NavItem'
import headerData from '../data/headerData'
import ResumeButton from './ResumeButton'
import Logo from './Logo'

import { HiMenuAlt3 } from 'react-icons/hi'
import { ImCross } from 'react-icons/im'

function SidebarB() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpen
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'scroll'
  }, [isOpen])

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Logo */}
      <div className="w-full h-20 flex fixed bg-bg backdrop-blur-md bg-opacity-80 z-30">
        <Logo largeScreen={false} />
      </div>

      {/* Burger and Close icons */}
      {
        isOpen
          ?
          <button
            className="fixed z-50 flex items-center cursor-pointer right-11 top-8 text-orange-text text-lg"
            onClick={handleOpen}>
            <ImCross />
          </button>
          :
          <button
            className="fixed z-40 flex items-center cursor-pointer right-10 top-6"
            onClick={handleOpen}>
            <HiMenuAlt3 className="text-orange-text text-3xl" />
          </button>
      }

      {/* Sidebar content */}
      <div className={`top-0 right-0 w-[75vw] sm:w-[50vw] bg-light-gray-bg flex flex-col justify-center fixed h-full z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
        <ul className="space-y-8 block text-center SFMono">
          {
            headerData.map(item => {
              return (
                <li
                  key={Math.random()}
                  className="cursor-pointer">
                  <NavItem
                    handleOpen={handleOpen}
                    linkTo={item.linkTo}
                    offset={item.offset.mobile}
                    idx={item.idx}
                    title={item.title}
                  />
                </li>
              )
            })
          }

          {/* Resume */}
          <div>
            {/* <a rel="noopener noreferrer" target="_blank">
              <button className={`border border-orange-border text-orange-text px-5 py-5 rounded-lg hover:bg-orange-bg hover:bg-opacity-20 transition duration-200 ease-out`}>
                Resume
              </button>
            </a> */}
            <ResumeButton width={10} height={3} />
          </div>
        </ul>
      </div>

      {/* Background Overlay */}
      {
        isOpen
          ? <div
            className="w-full h-full fixed bg-bg bg-opacity-40 backdrop-blur-sm z-30"
            onClick={handleOpen}
            onTouchMove={handleOpen} />
          : null
      }
    </>
  )
}

export default SidebarB
