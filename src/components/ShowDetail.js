import React, { useState,useEffect } from 'react'
import {useParams, Link, useLocation} from 'react-router-dom'
import { useAppContext } from './AppContext'


const ShowDetail= ()=> {
    const location= useLocation()
    const {list}= useAppContext()
    const params= useParams()
    const [showDetail, setShowDetail]= useState({})
    const data= list[params.id-1]
    /* useEffect(()=> {
        async function readData(id) {
            let response=await fetch(`https://api.tvmaze.com/shows/${id}`)
            let show= await response.json()
           
           
            setShowDetail(show)            
             }
             
        const id= params.id
        readData(id)
    },[]) */
    return (
        <div style={{position: 'relative',left:'100px'}}>
        <h3>Show Detailds</h3>
        <img src={data.image.medium}/>
        <p>Show number {data.id}</p>
        <p>Title: {data.name}</p>
        <p>Summary: {data.summary}</p>
        <p>Rating: {data.rating.average}</p>
        <Link to={`${location.pathname}/episodes`}>Go to episodes</Link>
        </div>
    )
}
export default ShowDetail
