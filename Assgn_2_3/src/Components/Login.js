import axios from "axios";
import './Pages/Form.css';
import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { login, loginstart } from "../features/userSlice";
import { Form, Input, Button, Checkbox } from 'antd';


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch= useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");

            axios
              .post("testurl.com/login", {
                username: username,
                password: password,
              })
              .then((res) => {
                //dispatch(loginSuccess())
              })
              .catch((err) => {
                console.log(err);
                //dispatch(loginFailed());
              });
            setTimeout(() => {
                dispatch(login({
                    username: username,
                    password: password,
                }));
            }, 1000);
};

    return (
        <div className="Modal">
            <form className="loginform" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login here</h1>
                <input 
                type="username" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                />
                <br /><br/>
                <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                />
                <br /><br/>
                <button type="submit" className="submitbtn" >Submit</button>
            </form>
        </div>
    )
}

export default Login
