import React, { Component,useEffect,useState } from 'react';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import history from './../history';
import { FormInstance } from 'antd/lib/form';
import "./Home.css";
import { Header } from 'antd/lib/layout/layout';

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};




export default function Home() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  async function onItemClick(){
    console.warn(username,password);
    let item={username,password};
    let result=fetch("http://testurl.com/login");
    history.push('/Products');
    
   }
  
  return(
    <div>
      
      <Header/>
      <h1>Login Page</h1>
      {/* <div className="col-sm-6 offset-sm-3"> */}
        <form onSubmit={onItemClick}>
      <input type="username" required placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
      <br /> 
      <input type="password" required placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
      <br/>
      <input type="submit" value="submit" variant="btn btn-success" />
      </form>
    {/* </div> */}
    </div>
  )

}



