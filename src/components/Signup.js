import React, {useState} from 'react'

const Signup=()=> {
    
  
    const [input, setInput]= useState({email: '',password: ''})
    const onChange=(e)=> {
        const name= e.target.name
        const value= e.target.value
        setInput({...input, [name]: value})
      
    }
    const validateForm=()=> (input.email.length>0 && input.password.length > 0)
    const handleSubmit= (e)=> {
        e.preventDefault()
        if (localStorage.getItem(input.email)) {
            alert('email has been used')
        }
       else {
           let user= {
               
                    password: input.password
               }
           
           localStorage.setItem(input.email, JSON.stringify(user))
           alert('a new user has been created successfully')
       }
      
    }
    return (
        <div className='login-form'>
            <div>
                <h3>Sign up new user</h3>
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
            >Sign Up</button>
            
       
        </div>
    )
}
export default Signup