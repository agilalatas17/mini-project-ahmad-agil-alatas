import React, { useState } from "react";
import { Layout, Row, Menu } from "antd";
import { MENU_ITEM } from "../constants";
import { Link } from "react-router-dom";
import "./headerComponent.css";

function HeaderComponent() {
  const { Header } = Layout;

  const path = window.location.pathname;
  const [current, setCurrent] = useState(path);

  const onClick = (values) => {
    setCurrent(values.key);
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 99,
        width: "100%",
      }}
    >
      <Row justify="space-between">
        <Link to="/" className="brand-logo">
          <span>Stay</span>cation.com
        </Link>
        <Menu
          mode="horizontal"
          items={MENU_ITEM}
          disabledOverflow
          onClick={onClick}
          selectedKeys={[current]}
          style={{ zIndex: 99 }}
        />
      </Row>
    </Header>
  );
}

export default HeaderComponent;
