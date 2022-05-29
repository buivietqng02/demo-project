

import React , {useEffect, useState} from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import {AppContext} from './components/AppContext'
import Login from './components/Login'
import {BrowserRouter as Router, Route,Routes, Navigate}  from 'react-router-dom'
import ConfigRoute from './components/ConfigRoute'
import Home from './components/Home'
import NoFound from './components/NoFound'
import ShowDetail from './components/ShowDetail'
import EpisodeList from './components/EpisodeList'
import EpisodeDetail from './components/EpisodeDetail'

function App() {
 
  const [list, setList]= useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(
   localStorage.getItem('user')
  )
   const [searchString, setSearchString] = useState('');
   const [isLoading, setIsLoading] = useState(true);
   const handleLogout= ()=> {
     setIsAuthenticated(false)
     const user= JSON.parse(localStorage.getItem('user'))
     if (user) {
       user.isAuth= false
     } else {
       user= {
         isAuth: false
       }
     }
     localStorage.setItem('user', JSON.stringify(user))
   }
   useEffect(()=> {
     const user= JSON.parse(localStorage.getItem('user'))
     if (user && user.isAuth) {
       setIsAuthenticated(true)
     } else {
       setIsAuthenticated(false)
     }
   }, [isAuthenticated])
 
 
  return (
    <AppContext.Provider value={{
      isAuthenticated, 
      setIsAuthenticated,
      searchString,
      setSearchString,
      isLoading,
      setIsLoading,
      list,
      setList

    }}>
    
    <Router>
      <Navbar handleLogout= {handleLogout}/>
      <Sidebar/>
      <Routes>
        <Route  path='/' element= {<Navigate to='/shows'/>}/>
          
        
        <Route path='/shows' element={<ConfigRoute>
          <Home/>
        </ConfigRoute>} />
        <Route path='/shows/:id' element={<ConfigRoute>
          <ShowDetail/>
        </ConfigRoute>} />
        <Route path='/shows/:id' element={<ConfigRoute>
          <ShowDetail/>
        </ConfigRoute>} />
        <Route path='/shows/:id/episodes' element={<ConfigRoute>
          <EpisodeList/>
        </ConfigRoute>} />
        <Route path='/shows/:id/episodes/:season/:number' element={<ConfigRoute>
          <EpisodeDetail/>
        </ConfigRoute>} />
         
          
        <Route path='/login' element={<ConfigRoute>
          <Login/>
        </ConfigRoute>} />
        <Route path='*' element={<ConfigRoute>
          <NoFound/>
        </ConfigRoute>} />
         
         
      </Routes>
       
    </Router>
    

   {/*  <ul>
    {list.map((l, index)=> {
      const src= l.image && l.image.medium 
      return (
    <li key={index}>
      <img src={src} /></li>
      )
      })}
    </ul>
    <p>{list.length}</p> */}
    </AppContext.Provider>
   
  );
}

export default App;
