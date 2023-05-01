import React from "react";
import { Layout, Row, Col, Typography, List } from "antd";
import { Link } from "react-router-dom";
import "./footerComponent.css";

function FooterComponent() {
  const { Title } = Typography;
  const { Footer } = Layout;

  return (
    <Footer>
      <div className="footer-content">
        <Row>
          <Col span={6}>
            <Link to="/" className="brand-logo">
              <span>Stay</span>cation.com
            </Link>
            <p>We kaboom your beauty holiday instantly and memorable.</p>
          </Col>

          <Col span={6}>
            <Title level={5}>For Beginner</Title>
            <List>
              <List.Item>
                <Link>New Account</Link>
              </List.Item>
              <List.Item>
                <Link>Start Booking a Room</Link>
              </List.Item>
              <List.Item>
                <Link>Use Payments</Link>
              </List.Item>
            </List>
          </Col>

          <Col span={6}>
            <Title level={5}>Explore Us</Title>
            <List>
              <List.Item>
                <Link>Our Careers</Link>
              </List.Item>
              <List.Item>
                <Link>Privacy</Link>
              </List.Item>
              <List.Item>
                <Link>Terms & Conditions</Link>
              </List.Item>
            </List>
          </Col>

          <Col span={6}>
            <Title level={5}>Connect Us</Title>
            <List>
              <List.Item>
                <Link>support@staycation.id</Link>
              </List.Item>
              <List.Item>
                <Link>021 - 2208 - 1996</Link>
              </List.Item>
              <List.Item>
                <Link>Staycation, Klangenan, Cirebon</Link>
              </List.Item>
            </List>
          </Col>
        </Row>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; Copyright 2023 • Made with ❤️ by R.S AHMAD AGIL ALATAS •
          Staycation.com
        </p>
      </div>
    </Footer>
  );
}

export default FooterComponent;
