import React from 'react';
//import switch
import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";

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

const LogForm = () => {

  const onFinish = (values) => {
    fetch('http://testurl.com/login',{
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(values)
    })
    .then(res=> res.json())
    .then(data=> console.log(data))
    .catch(error => console.log("Error but redirecting anyways"));
    
    history.push("/home");  
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  let history = useHistory();

  return (
    <div className="main">
    <p className="sign" align="center">Login</p>
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onSubmit={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true
          },
        ]}
      >
        <Input placeholder="Username" className="un" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true
          },
        ]}
      >
        <Input.Password placeholder="Password" className="pass" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        
        <Button type="primary" htmlType="submit" className="submit" align="center" >
        
          Login
          
        </Button> 
   
      </Form.Item>
    </Form>
    </div>
  );
};


export default LogForm;




//Without antd
// class LogForm extends Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			username: '',
// 			password: ''
// 		}
// 	}

// 	onEntry = (e) => {
// 		this.setState({ [e.target.name]: e.target.value })
// 	}

// 	submitted = (e) => {
// 		e.preventDefault();
// 		fetch('http://testurl.com/login',{
// 			method: 'POST',
// 			headers: { 'Content-Type':'application/json' },
// 			body: JSON.stringify(this.state)
// 		})
// .then(res=> res.json())
// .then(data=> console.log(data));

// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.submitted}>

// 				<div><input type="text" name="username" value={this.username} onChange={this.onEntry} placeholder="Username"/></div>
// 				<div><input type="text" name="password" value={this.password} onChange={this.onEntry} placeholder="Password"/></div>
// 				<div><button type="submit">Login</button></div>

// 			</form>
// 			);
// 	}
// }

// export default LogForm;