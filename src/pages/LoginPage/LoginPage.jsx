import React from "react";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "./query/profile-query";

function LoginPage() {
  const [form] = Form.useForm();
  const { Title } = Typography;
  const navigate = useNavigate();

  // Regex Validation
  const emailRegex = /^[a-zA-Z0-9._+]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // GraphQL
  const {
    data: profileData,
    loading: isProfileLoading,
    error: isProfileError,
  } = useQuery(GET_PROFILE);
  console.log(profileData);

  const onLogin = (values) => {
    const profiles = [...profileData?.booking_app_profile];

    // mengecek apakah user sudah terdaftar
    const isUser = profiles.find((profile) => profile.email === values.email);
    4;

    // mengecek user sudah terverifikasi sesuai data user yang ada
    const isVerified = JSON.stringify(isUser) === JSON.stringify(values);
    console.log(isVerified);

    if (isVerified) {
      localStorage.setItem("token", true);
      navigate("/admin");
    } else {
      Modal.warning({
        title: "Login Gagal!",
        content: "Email atau Password salah!",
        centered: true,
        onOk() {
          form.resetFields();
        },
      });
    }
  };

  return (
    <div className="container-form">
      <Title level={3} style={{ marginBottom: 24 }}>
        Login
      </Title>
      <Form
        className="login-form"
        name="login-form"
        form={form}
        onFinish={onLogin}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your Email!" },
            {
              type: "email",
              pattern: emailRegex,
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
            {
              pattern: passwordRegex,
              message: "Password minimal 8 karakter!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
