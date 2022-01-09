import useWidth from '../../hooks/useWidth'
import Sidebar from './Sidebar'
import Header from './Header'

function Navbar() {
  const getWidth = useWidth()

  return (
    <>
      {
        getWidth <= 768
          ? <Sidebar />
          : <Header />
      }
    </>
  )
}

export default Navbar