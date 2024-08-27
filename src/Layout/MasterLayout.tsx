

import { Outlet } from 'react-router-dom'
import Header from '../Shared/components/Header/Header'
import HeaderTop from '../Shared/components/Header/Subcomponents/HeaderTop'
import HeaderLogo from '../Shared/components/Header/Subcomponents/HeaderLogo'
import HeaderNav from '../Shared/components/Header/Subcomponents/HeaderNav'
import HeaderIcons from '../Shared/components/Header/Subcomponents/HeaderIcons'
import Footer from '../Shared/components/Footer/Footer'

const MasterLayout = () => {
  return (
   <>
      <Header>
        <HeaderTop />
        <HeaderLogo />
        <HeaderNav />
        <HeaderIcons />
      </Header>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default MasterLayout