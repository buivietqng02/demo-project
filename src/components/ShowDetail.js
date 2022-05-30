import React, { useState,useEffect } from 'react'
import {useParams, Link, useLocation} from 'react-router-dom'
import { useAppContext } from './AppContext'
import { Spinner } from 'react-bootstrap'


const ShowDetail= ()=> {
    const [isLoading, setIsLoading]= useState(true)
    const location= useLocation()
    const {list}= useAppContext()
    const params= useParams()
    const [showDetail, setShowDetail]= useState({})
    const ShowData= list[params.id-1]
    useEffect(()=> {
        async function readData(id) {
            setIsLoading(true)
            try {
            let response=await fetch(`https://api.tvmaze.com/shows/${id}`)
            let show
            if (response.ok) {
               show= await response.json()
                console.log(show)
           
                setShowDetail(show)   
                setIsLoading(false)  
            } else throw('error when fetching')
            }
            catch (err) {
                alert(err.toString())
            }
                  
             }
             
        const id= params.id
        readData(id)
    },[location])
    return (
        <div style={{position: 'relative',left:'100px'}}>
            {isLoading ? <Spinner/> :
            <div>
        <h3>Show Detailds</h3>
        <img src={showDetail?.image?.medium}/>
        <p><span style={{fontWeight: 'bold'}}>Show number: </span> {showDetail?.id}</p>
        <p><span style={{fontWeight: 'bold'}}>Title: </span>{showDetail?.name}</p>
        <p><span style={{fontWeight: 'bold'}}>Summary: </span>{showDetail.summary}</p>
        <p><span style={{fontWeight: 'bold'}}>Rating: </span> {showDetail?.rating?.average}</p>
        <Link to={`${location?.pathname}/episodes`}>Go to episodes</Link>
        </div>
    }
        </div>
    )
}
export default ShowDetail
