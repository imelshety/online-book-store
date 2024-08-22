

import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import HeaderTop from '../components/Header/Subcomponents/HeaderTop'
import HeaderLogo from '../components/Header/Subcomponents/HeaderLogo'
import HeaderNav from '../components/Header/Subcomponents/HeaderNav'
import HeaderIcons from '../components/Header/Subcomponents/HeaderIcons'

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
   </>
  )
}

export default MasterLayout