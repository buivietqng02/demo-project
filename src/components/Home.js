import React, { useEffect , useState} from "react";
import { Spinner } from "react-bootstrap";
import ShowList from "./ShowList";
import { useAppContext } from "./AppContext";
import callAPI from "../utils/callAPI";
const Home = () => {
  const {  list, setList ,searchString} = useAppContext();
  const [isLoading, setIsLoading]= useState(true)
  useEffect( ()=> {
    setIsLoading(true)
    async function readData() {
        try {
   let response=await fetch('https://api.tvmaze.com/shows')
   if (response.ok){
       console.log('fetch ok')
   let movies= await response.json()
   console.log(movies.length)
   console.log(movies[0])
  
   setList(movies)
   setIsLoading(false)
   } else {
       throw 'error when fetching'
   }
   }
   catch(err) {
       alert(err.toString())
   }
    }
    readData()
 
    
  },[])
  return (
    <>
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <ShowList list={list}></ShowList>
      )}
    </>
  );
};
export default Home;
