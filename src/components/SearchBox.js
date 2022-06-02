import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { useAppContext } from './AppContext'
const SearchBox= ({type,placeholder})=> {
    const location= useLocation()
    let [searchParams, setSearchParams] = useSearchParams()
    const {searchString, setSearchString} = useAppContext()
    const [value, setValue] = useState('')
    useEffect(()=> {
        return ()=> {
            setSearchString({
                text: '',
                number: '',
                date: ''
            })
        }
    },[location.pathname])
    const handleChange= (e)=> {
        const nextValue= e.target.value
        setValue(nextValue)
        console.log(type)
        if (type==='text'){
        setSearchString({...searchString, text: nextValue})
        }
        if (type==='number'){
            setSearchString({...searchString, number: nextValue})
            }
        if (type==='date'){
            setSearchString({...searchString, date: nextValue})
            }
       
        
    }
    return (
        <>
            <input type={type}
            value= {value}
            className= 'search-input'
            onChange={handleChange}
            placeholder={placeholder}

            />

        </>
    )

}
export default SearchBox