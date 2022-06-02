import React  from "react"
import {Link} from 'react-router-dom'
import {BiLike} from 'react-icons/bi'
const ShowItem= ({item, liked})=> {
    const {id,name, image}= item
    
    return (
        <div className= 'item-wrapper'>
           <Link to={`/shows/${id}`}>
            <div className='img-wrapper'>
            <img src= {image?.medium} alt={name}/>
            </div>
            </Link>

           
            <div className= 'item-info'>
                <h4>{name} {liked? <BiLike style={{fontSize: '2em'}}/> : null} </h4>
                <p>Show id {id} </p>  
            </div>

            
        </div>
    )
}
export default ShowItem