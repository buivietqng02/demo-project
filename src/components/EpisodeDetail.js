import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addEpisodeFavourite, addEpisodeLike,
removeEpisodeFavourite,
removeEpisodeLike } from '../redux/slice'
import callAPI from '../utils/callAPI'
import { useLocation } from 'react-router-dom'
const EpisodeDetail= ()=> {
    const episodeLikeList= useSelector(
        (state)=> state.favourite.episodeLike
    )
    const episodeFavouriteList= useSelector(
        (state)=> state.favourite.episodeFavourite
    )
    const dispatch=useDispatch()
    const location= useLocation()
    const params= useParams()
    const [isLoading, setIsLoading]= useState(true)
    const [episodeDetail, setEpisodeDetail]= useState({})
    const id= params.id
    const season= params.season
    const number= params.number
    const isEpisodeLike = (item, episodeLikeList) => {
        for (let show of episodeLikeList) {
          if (item.url === show.url) {
            return true;
            break;
          }
        }
        return false;
      };
      const isEpisodeFavourite = (item, episodeFavouriteList) => {
        for (let show of episodeFavouriteList) {
          if (item.url === show.url) {
            return true;
            break;
          }
        }
        return false;
      };
    useEffect(()=> {
        async function readData() {
            setIsLoading(true)
            try {
            let response=await fetch(`https://api.tvmaze.com/shows/${id}/episodebynumber?season=${season}&number=${number}`)
            let episode
            if (response.ok) {
             episode= await response.json()
            episode.show_id= id
            setEpisodeDetail(episode)
            setIsLoading(false)
            } else {
                throw 'error when fetching data'
            }
             }
             catch(err) {
                 console.log(err.toString())
             }
            }
             readData()
    },[])
    return (
        <div style={{position: 'relative', left: '100px', marginTop:'20px'}}>
        {
             (isLoading)  ?
             <Spinner/>
             : <div>
                 <img src={episodeDetail?.image?.medium}/>
                 <div>
                     <p><span style={{fontWeight: 'bold'}}>Title : </span>{episodeDetail?.name}</p>
                     <p><span style={{fontWeight: 'bold'}}>Season: </span> {episodeDetail?.season}: number {episodeDetail?.number}</p>
                     <p><span style={{fontWeight: 'bold'}}>Summary:</span> {episodeDetail?.summary}</p>
                     <p><span style={{fontWeight: 'bold'}}>Air date: </span> {episodeDetail?.airdate}</p>
                     <p><span style={{fontWeight: 'bold'}}>Rating: </span> {episodeDetail?.rating?.average}</p>
                 </div>
                 <div>
                     <button
                     onClick={()=> dispatch(addEpisodeFavourite(episodeDetail))}

                     >Add to Favourite</button>
                     <button
                     onClick={()=> dispatch(removeEpisodeFavourite(episodeDetail))}

                     >Remove from Favourite</button>
                     {isEpisodeFavourite(episodeDetail,episodeFavouriteList)? <span>
                         You've added this episode to favourite
                     </span>: ''}
                  </div>   
                  <div>
                     <button onClick={()=> dispatch(addEpisodeLike(episodeDetail))}>Like</button>
                     <button onClick={()=> dispatch(removeEpisodeLike(episodeDetail))}>Unlike</button>
                     {isEpisodeLike(episodeDetail,episodeLikeList)? <span>
                         You've liked this show 
                     </span>: ''}
                  </div>   
             </div>
        }
        </div>
    )


}
export default EpisodeDetail