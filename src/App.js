

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
import Signup from './components/Signup'
import store from './redux/store'
import {useSelector} from 'react-redux'
import MyFavourite from './components/MyFavourite'
import EpisodeHome from './components/EpisodeHome'


function App() {
  const s= useSelector(
    (state)=> state.favourite.showFavourite
  )
 
  store.subscribe(()=> {
   console.log('state', s)

  })
  const value= useSelector((state)=> state.favourite.showLike)
  console.log(value)
  const [list, setList]= useState([])
  const [episodes, setEpisodes]= useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(
   localStorage.getItem('user')
  )
   const [searchString, setSearchString] = useState({text:'',number:'', date: ''});
   console.log(searchString)
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
      
      list,
      setList,
      episodes,
      setEpisodes

    }}>
    
    <Router>
      <Navbar handleLogout= {handleLogout}/>
      <Sidebar handleLogout= {handleLogout}/>
      <Routes>
        <Route  path='/' element= {<Navigate to='/shows'/>}/>
        <Route  path='/signup' element= {<Signup/>}/> 
        
        <Route path='/shows' element={<ConfigRoute>
          <Home/>
        </ConfigRoute>} />
       
        <Route path='/shows/:id' element={<ConfigRoute>
          <ShowDetail/>
        </ConfigRoute>} />
        <Route path='/shows/:id/episodes' element={<ConfigRoute>
          <EpisodeHome/>
        </ConfigRoute>} />
        <Route path='/myfavourite' element={<ConfigRoute>
          <MyFavourite/>
        </ConfigRoute>} />
        <Route path='/shows/:id/season/:season/number/:number' element={<ConfigRoute>
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
    

   
    </AppContext.Provider>
   
  );
}

export default App;
