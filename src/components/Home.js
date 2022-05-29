import React, {useEffect} from 'react'
import { Spinner } from 'react-bootstrap'
import ShowList from './ShowList'
import { useAppContext } from './AppContext'
const Home= ()=> {
    const {isLoading, setIsLoading, list, setList}= useAppContext()
    useEffect( ()=> {
        setIsLoading(true)
        async function readData() {
       let response=await fetch('https://api.tvmaze.com/shows')
       let movies= await response.json()
       console.log(movies.length)
       console.log(movies[0])
       console.log(movies[1])
       setList(movies)
       setIsLoading(false)
        }
        readData()
     
        
      },[])
    return (
        <>
        {isLoading ? 
        <div>
            <Spinner/>
        </div>
        : <ShowList list= {list}></ShowList>
        }
          
        </>
    )
}
export default Home