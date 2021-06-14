import React, { useState, useEffect } from 'react';
import App from './App';
import { useHistory } from 'react-router-dom';

import { 
    BrowserRouter as Router, 
   Switch,
   Route,
Link
} from "react-router-dom";
class Login extends React.Component{
    render(){
        
   //result = result.json
  // localStorage.setItem(JSON.stringify(result))     
   //history.pushState("/add")
    return(
            <div class ='text-center p-10' className="form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                   <input type="text" name="username" placeholder="username" onChange={(e)=>setUsername(e.target.value)} className="form-control"/><br />
                </div>
                <div className="form-group">
                       <label htmlFor="password">Password:</label>
                       <input type="password" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} className="form-control"/><br />
                </div>
           <Router>
               <Switch>
                   <Route path ='/App'>
                       <App />
                       </Route>
                  
                <Link to ="/App">
                    <div className='footer'>
                    <button onClick={login} type='button'>Login</button>
                </div>  
                </Link></Switch></Router>
            </div>


                

            
        );
        function Log(){
            const[username,setUsername]=useState("");
            const[password,setPassword]=useState("");
           async function login(){
               console.warn(username,password)
               let item={username,password};
               let result = fetch("http://testurl.com/login",{
               method: 'POST',
               headers: {
                   "Content-Type":"application/json",
                   "Accept":'application/json'
               },
               body: JSON.stringify(item)
           });
        }
                }
    
}
}


export default Login;