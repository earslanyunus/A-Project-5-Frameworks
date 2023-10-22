import Navbar from '../components/common/Navbar'
import { Outlet } from "@solidjs/router";
import Footer from '../components/common/Footer'

const DetailLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>

    )
}

export default DetailLayout