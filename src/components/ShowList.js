import React from 'react'
import ShowItem from './ShowItem'
const ShowList= ({list}) => {
    return (
        <div className='items-wrapper'>
            {
                list.map((item, index)=> 
                <ShowItem key= {index} item= {item}/>)
            }
        </div>

    )
}
export default ShowList