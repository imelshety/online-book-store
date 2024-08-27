
import logo from '/assets/Logo.png'

const HeaderLogo = () => {
  return (
    <div className="rounded-full w-[86px] h-[86px] ps-4 flex justify-center items-center">
        <img src={logo} alt="logo" />
    </div>
  )
}

export default HeaderLogo