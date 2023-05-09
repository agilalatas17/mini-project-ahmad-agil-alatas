import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Row, Avatar, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import "./headerAdmin.css";

function HeaderAdmin() {
  const { Header } = Layout;
  const { Title } = Typography;

  return (
    <Header
      className="admin"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 99,
        width: "100%",
      }}
    >
      <Row justify="space-between">
        <div />
        <Space>
          <Avatar size="large" icon={<UserOutlined />} />
          <Title level={5} className="username" style={{ marginLeft: 8 }}>
            Hi, Agil
          </Title>
        </Space>
      </Row>
    </Header>
  );
}

export default HeaderAdmin;
