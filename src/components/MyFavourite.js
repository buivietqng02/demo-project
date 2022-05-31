import React , {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ShowList from './ShowList'

const MyFavourite= ()=> {
    const showList= useSelector((state)=> state.favourite.showFavourite)
    const episodeList= useSelector((state)=> state.favourite.episodeFavourite)
const [tab, setTab]= useState(false)
    return (
        <div>
            <div className= 'tabs'>
                <div className= 'tab'
                onClick={()=> setTab(false)}>Shows</div>
                <div onClick= {()=>setTab(true)} className='tab'>Episodes</div>
                <div className='rest'></div>
            </div>
            <div className='favourite-items'>
                {!tab ? 
                <ShowList list={showList}/>
            : <h1>episode</h1>}
            </div>

        </div>
    )
}
export default MyFavourite