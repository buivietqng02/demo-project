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
            <NavLink to="/login"
            onClick={handleLogout}>log out</NavLink>
            </div>
            : <div>
                 <NavLink to="login">log in</NavLink>
            </div>
           }
           
           
        
           
                
        </div>
    )
}
export default NavBar