import React from 'react';

import { Form, Input, Button } from 'antd';
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

const ContactForm = () => {
  const onFinish = (values) => {
    //e.preventDefault();
    fetch('http://testurl.com/contactme',{
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(values)
    })
.then(res=> res.json())
.then(data=> console.log(data))
.catch(error=> console.log('Error!'));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="main">
    <Form
      {...layout}
      name="Basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="name"
      >
        <Input placeholder="Name" className="un" />
      </Form.Item>

      <Form.Item
        name="email"
      >
        <Input placeholder="Email ID" className="un" />
      </Form.Item>

      <Form.Item
        name="phone"
      >
        <Input placeholder="Phone Number" className="un" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="submit" align="center">
          Contact Us
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};


export default ContactForm;


// class ContactForm extends Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			nam: '',
// 			Email: '',
// 			phone: ''
// 		}
// 	}

// 	onEntry = (e) => {
// 		this.setState({ [e.target.name]: e.target.value })
// 	}

// 	submitted = (e) => {
// 		e.preventDefault();
// 		console.log(this.state);
// 	}

// 	render() {
// 		return (
// 			<form onSubmit={this.submitted}>

// 				<div>
// 					<label>Name</label>
// 					<input type="text" name="nam" value={this.nam} onChange={this.onEntry} />
// 				</div>
// 				<div>
// 					<label>Email Id</label>
// 					<input type="text" name="Email" value={this.Email} onChange={this.onEntry} />
// 				</div>
// 				<div>
// 					<label>Phone Number</label>
// 					<input type="text" name="phone" value={this.phone} onChange={this.onEntry} />
// 				</div>
// 				<div><button type="submit">Contact Us</button></div>

// 			</form>
// 			);
// 	}
// }

// export default ContactForm;