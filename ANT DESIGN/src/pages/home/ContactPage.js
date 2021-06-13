import React from "react";
import MenuComponent from "../../components/Menu";
import { Form, Input, Button } from "antd";

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
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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