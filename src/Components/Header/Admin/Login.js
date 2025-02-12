import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username,setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate()
 
    const logincheck = (e)=>{
        e.preventDefault();
        if(username==="kiranrayapudi" && password==="kiran9966"){
            navigate("/admindashboard")
           

        }else{
            alert("invalid username and password")
            
        }
    
        
    }


  return (
    <div className='loginimage'>
    <div className=' container p-5'>
        <h2>Login</h2>
        <div className='login col-8 col-lg-6 mx-auto'>
            <form onSubmit={logincheck}  className='p-5'>
                <input type='text' name='username' placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)} className='form-control mb-3'/>
                <input type='password' name='password' placeholder='Enter password' value={password} onChange={(e)=>setpassword(e.target.value)} className='form-control mb-3'/>
                <input type='submit' value='login'className='btn btn-danger'/>
            </form>
             
        </div>
    </div> 
    </div>
  )
}

export default Login