import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

function Login() {
    let history= useHistory();
    
    const [username,setUsername] = useState("");
    const [password,setPassword]=useState("")  ;
    
    // function clickrun() {
    //   if (1==true )  {
    //      return ()=>{history.push("/profile")}
    //   }
    // }
        
    const updateUsername= e =>{
        setUsername(e.target.value);
        console.log(username);
    }
    const updatePassword= e =>{
        setPassword(e.target.value);
        console.log(password);
    }
    
    const onSubmit= ()=>
    {
        if (!username || !password)
        {return}
        else
        {
             fetch('http://testurl.com/login',{
            method: "POST",
            headers: { "content-type":"application/json",
            },
          body: JSON.stringify({
            username: username,
            password: password
          })
          })
          .then(res=>res.json())
          .then(data=>console.log(data))
            
          return (history.push("/profile"))


        }
    }
    return(
        <div>
            
            <h1>Sign In</h1>
            <div>
               <span>Username</span> 
               <input type="text" name="text" value={username}
               onChange={updateUsername}></input>
            </div>
            <div>
            <span>Passward</span> 
            <input type="password" name="password" value={password}
            onChange={updatePassword}></input>
            </div>
            <button onClick={onSubmit}>
            login</button>
        </div>
        );
}
export default Login;