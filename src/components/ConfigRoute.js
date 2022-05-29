import React, {memo, useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import { useAppContext } from './AppContext'
const ConfigRoute= ({children})=> {
    const location= useLocation()
    const navigate= useNavigate()
    const {isAuthenticated, setIsAuthenticated}= useAppContext()
   
    useEffect(()=> {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated])
    return (
        <>
        {children}
        </>
    )
}
export default memo(ConfigRoute)