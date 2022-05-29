import React from "react"

import {BiMoviePlay, BiHome, BiLogOut, BiBookmarks, BiVideo} from 'react-icons/bi'

const Sidebar=()=> {
    return (
        <div className="sidebar">
        
           <div><p><i> <BiHome/></i><span>Home</span></p></div>
           <div><p><i> <BiMoviePlay/></i><span>Movies</span></p></div>
           <div><p><i><BiVideo/></i><span>Tv Shows</span></p></div>
           <div><p><i> <BiBookmarks/></i><span>Favourite</span></p></div> 
           <div><p><i> <BiLogOut/></i><span>Logout</span></p></div>
          
       
        </div>
        
    )
}
export default Sidebar