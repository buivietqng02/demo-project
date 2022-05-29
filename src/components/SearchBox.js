import React, {useState, useCallback} from 'react'
import debounce from '../utils/debounce'
import { useAppContext } from './AppContext'
const SearchBox= ()=> {
    const {setSearchString} = useAppContext
    const [value, setValue] = useState('')
    const debounced= useCallback(
        debounce(nextValue=> setSearchString(nextValue), 1000),
        []
    )
    const handleChange= (e)=> {
        const nextValue= e.target.value
        setValue(nextValue)
        debounced(nextValue)
    }
    return (
        <>
            <input type='text'
            className= 'search-input'
            onChange={handleChange}
            placeholder='Search'

            />

        </>
    )

}
export default SearchBox