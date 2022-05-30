import React, {useEffect, useState} from 'react'
import EpisodeItem from './EpisodeItem'
import { useAppContext } from './AppContext'
import {Spinner} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
const EpisodeList= () => {
    const {episodes, setEpisodes}= useAppContext()
    const [isLoading, setIsLoading]= useState(true)
    const params= useParams()
    const id= params.id
   
    useEffect( ()=> {
        setIsLoading(true)
        async function readData() {
       let response=await fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
       let listEpisode= await response.json()
       console.log(listEpisode[0])
       setEpisodes(listEpisode)
       setIsLoading(false)
        }
        readData()
     
        
      },[])
    return (
        <div className='items-wrapper'>
            {isLoading ? <Spinner/> :
                episodes.map((item, index)=> 
                <EpisodeItem key= {index} item= {item} show= {id}/>)
            }
        </div>

    )
}
export default EpisodeList