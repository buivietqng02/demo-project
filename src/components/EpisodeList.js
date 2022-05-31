import React, {useEffect, useState} from 'react'
import EpisodeItem from './EpisodeItem'
const EpisodeList= ({list, show}) => {
    return (
        <div className='items-wrapper'>
            {
                list.map((item, index)=> 
                <EpisodeItem key= {index} item= {item} show= {show}/>)
            }
        </div>

    )

}
export default EpisodeList