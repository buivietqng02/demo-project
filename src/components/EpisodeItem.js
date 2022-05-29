import React  from "react"
import {Link} from 'react-router-dom'
const EpisodeItem= ({item})=> {
    const {image, name, number, url,season}= item
    
    return (
        <div className= 'item-wrapper'>
           <Link to='/shows/1'>
            <div className='img-wrapper'>
            <img src= {image.medium} alt='no picture'/>
            </div>
            </Link>

           
            <div className= 'item-info'>
                <h4>{name} </h4>
                <p>Season {season} number {number}</p>  
            </div>

            
        </div>
    )
}
export default EpisodeItem
