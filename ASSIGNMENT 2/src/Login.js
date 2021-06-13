import React, { useState, useEffect } from 'react';
import App from './App';
import {Home, About, Contact} from './Pages';
import { 
    BrowserRouter as Router, 
   Switch,
   Route,
Link
} from "react-router-dom";
class Login extends React.Component {
  
   
    
    render() { 
        return(
            <div class ='text-center p-10' className="form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                   <input type="text" name="username" placeholder="username" className="form-control"/><br />
                </div>
                <div className="form-group">
                       <label htmlFor="password">Password:</label>
                       <input type="password" name="password" placeholder="password" className="form-control"/><br />
                </div>
           <Router>
               <Switch>
                   <Route path ='/App'>
                       <App />
                       </Route>
                  
                <Link to ="/App">
                    <div className='footer'>
                    <button type='button'>Login</button>
                </div>  
                </Link></Switch></Router>
            </div>


                

            
        );

    }
}
 
export default Login;