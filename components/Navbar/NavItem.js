import { Link } from 'react-scroll'

function NavItem({ handleOpen, linkTo, offset, idx, title, largeScreen }) {
  return (
    <Link
      activeClass="active"
      duration={500}
      onClick={handleOpen}
      offset={offset}
      spy={true}
      smooth={true}
      to={linkTo}
    >
      {
        largeScreen
          ?
          <div className="flex space-x-2 cursor-pointer">
            <p className="text-orange-text text-sm">{idx}</p>
            <p className="text-gray-300 hover:text-orange-text transition duration-100 ease-out">{title}</p>
          </div>
          :
          <>
            <p className="text-orange-text text-sm">{idx}</p>
            <p className="text-gray-300 hover:text-orange-text">{title}</p>
          </>
      }
    </Link>
  )
}

export default NavItem
