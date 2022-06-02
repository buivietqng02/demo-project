import React from "react"
import { NavLink } from "react-router-dom"
import {BiMoviePlay, BiHome, BiLogOut, BiBookmarks, BiVideo} from 'react-icons/bi'

const Sidebar=({handleLogout})=> {
    return (
        <div className="sidebar">
            <div className='sidebar-link'>
           <NavLink 
           
           to= '/'><div> <BiHome/><span>Home</span></div></NavLink>
         </div>
         <div className='sidebar-link'>
            <NavLink
           to='/myfavourite'><div> <BiBookmarks/><span>Favourite</span></div></NavLink> 
           </div>
           <div className='sidebar-link'>
           <NavLink
           to='/login'
           onClick={handleLogout}><div><BiLogOut/><span>Logout</span></div></NavLink>
          </div>
       
        </div>
        
    )
}
export default Sidebar