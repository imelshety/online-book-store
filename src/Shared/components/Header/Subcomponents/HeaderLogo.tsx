
import { Link } from 'react-router-dom'
import logo from '/assets/Logo.png'

const HeaderLogo = () => {
  return (
    <Link to='/home' className="rounded-full w-[86px] h-[86px] ps-4 flex justify-center items-center">
        <img src={logo} alt="logo" />
    </Link>
  )
}

export default HeaderLogo