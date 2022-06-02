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
        let auth= false
       let userStorage= localStorage.getItem(input.email)
       console.log(userStorage)
       console.log(input.email)
       if (userStorage==null) {
           auth= false
       } else {
           let user= JSON.parse(userStorage)
           console.log(user)
           if (user.password===input.password) {
                auth= true
           } else {
               auth= false
           }
       }

        if (auth) {
            setIsAuthenticated(true)
         
              let  user= { 
                    isAuth: true,
                    email: input.email
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
            <div>
                <h3>Login to continue</h3>
            </div>
            <div>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email'
            onChange={onChange}
            name='email' value={input.email}
            />
            </div>
            <div>
            <label htmlFor='email'>Password</label>
            <input type='password' id='password'
            name='password' value={input.password} 
            onChange={onChange}
           />
            </div>
           
            <button type='submit' 
            className='btn btn-submit'
            disabled= {!validateForm()}
            onClick={handleSubmit}
            >Login</button>
            
       
        </div>
    )
}
export default Login