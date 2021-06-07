import React from "react";
import MenuComponent from "../../components/Menu";
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";

const layout = {
  labelCol: {
    offset: 3,
    span: 4,
  },
  wrapperCol: {
    offset: 3,
    span: 8,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 8,
  },
};
function ContactPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
    .post("testurl.com/contactme", {
      name: values.name,
      email: values.email,
    })
    .then((res) => {
      //show success message
    })
    .catch((err) => {
      console.log(err);
      //show error message
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log("contact");
  return (
    <>
      <MenuComponent />
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ marginTop: "10%" }}
      >
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default ContactPage;
