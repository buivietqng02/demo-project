import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { useAppContext } from './AppContext'
import { useLocation } from 'react-router-dom'
const EpisodeDetail= ()=> {
    const location= useLocation()
    const params= useParams()
    const {isLoading, setIsLoading}= useAppContext()
    const [episodeDetail, setEpisodeDetail]= useState({})
    const id= params.id
    const season= params.season
    const number= params.number
    useEffect(()=> {
        async function readData() {
            setIsLoading(true)
            let response=await fetch(`https://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${number}`)
            let episode= await response.json()
           console.log(episode)
            setEpisodeDetail(episode)
            setIsLoading(false)
             }
             readData()
    },[])
    return (
        <div style={{position: 'relative', left: '100px', marginTop:'20px'}}>
        {
             (isLoading)  ?
             <Spinner/>
             : <div>
                 <img src={episodeDetail.image.medium}/>
                 <div>
                     <p>title {episodeDetail.name}</p>
                     <p>Season {episodeDetail.season}: number {episodeDetail.number}</p>
                     <p>Summary: {episodeDetail.summary}</p>
                     <p>Air date {episodeDetail.airdate}</p>
                     <p>Rating: {episodeDetail.rating.average}</p>
                 </div>
             </div>
        }
        </div>
    )


}
export default EpisodeDetail