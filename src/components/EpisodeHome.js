import React, {useEffect, useState} from 'react'
import { Spinner } from 'react-bootstrap'
import EpisodeList from './EpisodeList'
import { useAppContext } from './AppContext'
import { useParams } from 'react-router-dom'

const EpisodeHome= ()=> {
    const {episodes, setEpisodes}= useAppContext()
    const [isLoading, setIsLoading]= useState(true)
    const params= useParams()
    const id= params.id
   
    useEffect( ()=> {
        setIsLoading(true)
        async function readData() {
        try{
       let response=await fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
       if (response.ok) {
       let listEpisode= await response.json()
       console.log(listEpisode[0])
       setEpisodes(listEpisode)
       } else {
           throw 'error when fetching'
       }
        }
        catch (err) {
            alert(err.toString())

        }
       
        }
        setIsLoading(true)
        readData()
        setIsLoading(false)
     
        
      },[])
    return (
        <>
        {isLoading ? 
        <div>
            <Spinner/>
        </div>
        : <EpisodeList list= {episodes} show= {id}></EpisodeList>
        }
          
        </>
    )
}
export default EpisodeHome