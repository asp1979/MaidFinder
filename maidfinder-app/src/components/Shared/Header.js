import React from "react";
import { Outlet, Link } from "react-router-dom";


class Header extends React.Component {
  render() {
    return(
      <header>
        
<div className="bg-yellow">
       <h3><div className="my-2 mx-1">maidfinder.com.pk</div></h3>
        </div>

        <nav>
        
            <Link to="/">Home</Link>
          &nbsp; | &nbsp;
            <Link to="/Profile">Profile</Link>
            &nbsp; | &nbsp;
            <Link to="/About">About</Link>
            &nbsp; | &nbsp;
            <Link to="/Signup">Signup</Link>
      </nav>

      <Outlet />




      </header>
    );
  }
}
export default Header;