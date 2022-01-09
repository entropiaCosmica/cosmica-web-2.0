import Image from "next/image"
import { Link } from "react-scroll"

import CosmicPixelLogoSVGorizontal from '../../public/logo/cosmic-pixel_logo_h.svg'


const screenStyles = {
  large: [
    "flex",
    "justify-start",
    "h-16",
    "w-36",
    "items-center",
    "cursor-pointer"
  ],
  mobile: [
    "h-16",
    "w-28",
    "cursor-pointer",
    "relative",
    "left-6",
    "top-2"
  ]
}

const strLargeStyles = screenStyles.large.join(' ').toString()
const strMobileStyles = screenStyles.mobile.join(' ').toString()

function Logo({ largeScreen }) {
  return (
    <Link
      activeClass="active"
      to="start"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      <div className={`${largeScreen ? strLargeStyles : strMobileStyles}`}>
        <Image
          src={CosmicPixelLogoSVGorizontal}
          alt="Cosmica Logo"
          layout='fill'
          objectFit='contain'
          objectPosition="left"
        />
      </div>
    </Link>
  )
}

export default Logo
