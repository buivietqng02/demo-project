import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAppContext} from './AppContext'

const Login=()=> {
    const {setIsAuthenticated}= useAppContext()
   const navigate= useNavigate()
    const [input, setInput]= useState({email: '',password: ''})
    const onChange=(e)=> {
        const name= e.target.name
        const value= e.target.value
        setInput({...input, [name]: value})
      
    }
    const validateForm=()=> (input.email.length>0 && input.password.length > 0)
    const handleSubmit= (e)=> {
        console.log(input)
        e.preventDefault()
        if (input.email==='test@gmail.com' && input.password==='123') {
            setIsAuthenticated(true)
          const n= JSON.parse(localStorage.getItem('user1'))
          console.log(n)
              let  user= { 
                    isAuth: true
                }
            
            console.log('auth')
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/shows')
        }
        else {
            alert('wrong email or password')
        }
       
      
    }
    return (
        <div className='login-form'>
        <form>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email'
            onChange={onChange}
            name='email' value={input.email}
            />
            <br/>
            <label htmlFor='email'>Password</label>
            <input type='text' id='password'
            name='password' value={input.password} 
            onChange={onChange}
           />
            <br/>
            <button type='submit' 
            className='btn btn-submit'
            disabled= {!validateForm()}
            onClick={handleSubmit}
            >Login</button>
        </form>
        </div>
    )
}
export default Login