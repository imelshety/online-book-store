

import { Outlet } from 'react-router-dom'
import Footer from '../Shared/components/Footer/Footer'

const MasterLayout = () => {
  return (
   <>
     
   <Outlet/>
   <Footer/>
   </>
  )
}

export default MasterLayout