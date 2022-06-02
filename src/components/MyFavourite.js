import React , {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import EpisodeList from './EpisodeList'
import ShowList from './ShowList'

const MyFavourite= ()=> {
    const showList= useSelector((state)=> state.favourite.showFavourite)
    const episodeList= useSelector((state)=> state.favourite.episodeFavourite)
const [tab, setTab]= useState(false)
    return (
        <div>
            <div className= 'tabs'>
                <div className= {`tab ${!tab? 'active':''} `}
                onClick={()=> setTab(false)}>Shows</div>
                <div onClick= {()=>setTab(true)} className={`tab ${tab? 'active':''}`}>Episodes</div>
                <div className='rest'></div>
            </div>
            <div className='favourite-items'>
                {!tab ? 
                <ShowList list={showList}/>
            : <EpisodeList list= {episodeList}/>}
            </div>

        </div>
    )
}
export default MyFavourite