import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import ModalComponent from "../../components/Modal";

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

function LoginPage(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
    props.login(values.username, values.password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <ModalComponent visible={props.loading} />
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => dispatch(login(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
