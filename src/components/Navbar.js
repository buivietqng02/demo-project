import React from "react";
import SearchBox from './SearchBox'
import { useAppContext } from "./AppContext";
import { NavLink } from "react-router-dom";

const NavBar= ({handleLogout})=> {
    const {isAuthenticated} = useAppContext()
    let email
    if (isAuthenticated) {
        email=JSON.parse(localStorage.getItem('user')).email
    }
    return (

        <div className="header">
           {isAuthenticated ?
           <div>
            <SearchBox/>
            <NavLink className= 'navbar-logout' to="/login"
            onClick={handleLogout}>log out</NavLink>
            <span style= {{marginLeft:'100px', color: 'rgba(255,255,255,.5'}}
            >Wellcome: {email}</span>
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