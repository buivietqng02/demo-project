import React from "react";
import SearchBox from './SearchBox'
import { useAppContext } from "./AppContext";
import { NavLink } from "react-router-dom";

const NavBar= ({handleLogout})=> {
    const {isAuthenticated} = useAppContext()
    return (

        <div className="header">
           {isAuthenticated ?
           <div>
            <SearchBox/>
            <NavLink className= 'navbar-logout' to="/login"
            onClick={handleLogout}>log out</NavLink>
            </div>
            : <div >
                 <NavLink className= 'navbar-login'
               
                 to="/login">log in</NavLink>
                  <NavLink className= 'navbar-login'
                style={{marginLeft: '10px'}}
               to="/signup">Sign Up</NavLink>
            </div>
           }
           
           
        
           
                
        </div>
    )
}
export default NavBar