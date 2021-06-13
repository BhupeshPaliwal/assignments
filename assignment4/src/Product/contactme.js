import React, { Component,useEffect,useState } from 'react';
import { Form, Input, Button, Checkbox, Select} from 'antd';
import history from './../history';
import { FormInstance } from 'antd/lib/form';
import { Header } from 'antd/lib/layout/layout';
export default function ContactMe(){
    const [Email,setEmail]=useState("");
    const [ContactNumber,setContactNumber]=useState("");
    async function onItemClick(){
      console.warn(Email,ContactNumber);
      let item={Email,ContactNumber};
      let result=fetch("testurl.com/contactme");
      history.push('/Products');
     
     }
    
    return(
      <div>
        <Header/>
        <h1>Contact Me</h1>
        <div className="col-sm-6 offset-sm-3">
          <form onSubmit={onItemClick}>
        <input type="username" required placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)}/>
        <br /> 
        <input type="text" placeholder="Contact Number" onChange={(e)=>setContactNumber(e.target.value)}/>
        <br/>
        <input type="submit" value="Submit" variant="btn btn-success" /> 
 </form>
 </div>
      </div>
    )
} 
