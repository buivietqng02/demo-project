import React  from "react"
import {Link} from 'react-router-dom'
import {BiLike} from 'react-icons/bi'
const EpisodeItem= ({item, show, liked})=> {
    const {image, name, number, url,season}= item
    
    return (
        <div className= 'item-wrapper'>
           <Link to={`/shows/${show}/season/${season}/number/${number}`}>
            <div className='img-wrapper'>
            <img src= {image?.medium} alt='no picture'
           />
            </div>
            </Link>

           
            <div className= 'item-info'>
                <h4>{name} {liked?<span style={{fontSize:'2em'}}><BiLike/></span> : null} </h4>
                <p>Show id {show}</p>
                <p>Season {season} number {number}</p> 
                <p>Air date: {item?.airdate??''}</p> 
            </div>

            
        </div>
    )
}
export default EpisodeItem
