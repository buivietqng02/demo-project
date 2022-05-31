import React from "react"
import { NavLink } from "react-router-dom"
import {BiMoviePlay, BiHome, BiLogOut, BiBookmarks, BiVideo} from 'react-icons/bi'

const Sidebar=({handleLogout})=> {
    return (
        <div className="sidebar">
            <div className='sidebar-link'>
           <NavLink className='sidebar-link'
           
           to= '/'><div><i> <BiHome/></i><span>Home</span></div></NavLink>
         </div>
         <div className='sidebar-link'>
         
           <NavLink
           to='/myfavourite'><div><i> <BiBookmarks/></i><span>Favourite</span></div></NavLink> 
           </div>
           <div className='sidebar-link'>
           <NavLink
           to='/login'
           onClick={handleLogout}><div><i> <BiLogOut/></i><span>Logout</span></div></NavLink>
          </div>
       
        </div>
        
    )
}
export default Sidebar