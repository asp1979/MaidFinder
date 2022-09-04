
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <Header />






<section className="content m-5">
<div className="container-fluid">
 
    <Outlet />
   
</div>
</section>






        <Footer />
    </>
  )
};

export default Layout;