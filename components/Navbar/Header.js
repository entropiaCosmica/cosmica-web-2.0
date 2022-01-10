import NavItem from './NavItem'
import headerData from '../data/headerData'
import ResumeButton from './ResumeButton'
import Logo from './Logo'

function Header() {

  return (
    <header className={`fixed flex z-50 shadow-sm py-4  justify-between top-0 min-w-full bg-bg bg-opacity-80 backdrop-blur-xl`}>
      <nav className="mx-8 lg:mx-10 flex justify-between relative w-full max-w-auto">
        {/* Logo */}
        <Logo largeScreen={true} />

        {/** Nav Items */}
        <div className="space-x-8 flex justify-end items-center navItem z-40">
          {
            headerData.map(item => {
              return (
                <NavItem
                  key={Math.random()}
                  largeScreen={true}
                  linkTo={item.linkTo}
                  offset={item.offset.mobile}
                  idx={item.idx}
                  title={item.title}
                />
              )
            })
          }

          {/* Resume */}
          <ResumeButton width={8} height={3} />
        </div>
      </nav>
    </header>
  )
}

export default Header
