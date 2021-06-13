import React,{useState} from 'react';

import {Link, useHistory} from 'react-router-dom';
function Login() {
    
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")  
    
    // function clickrun() {
    //   if (1==true )  {
    //      return ()=>{history.push("/profile")}
    //   }
    // }
        
    

    return(
        <div>
            
            <h1>Sign In</h1>
            <div>
               <span>Username</span> <input type="text" name="text"
               onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
            <span>Passward</span> <input type="password" name="password" 
            onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <Link to="/a"  ><button>LOGIN</button></Link>
        </div>
        );
}
export default Login;