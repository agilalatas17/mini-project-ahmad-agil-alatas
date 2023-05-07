import React, { useState, useEffect } from "react";
import "./homePage.css";
import { Typography, Button, Row, Col, Carousel, Space, Card } from "antd";
import { IMAGE_ITEM, ROOM_DATA } from "./constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HomePage() {
  const { Title } = Typography;
  const { Meta } = Card;

  return (
    <>
      <section id="welcomeSection">
        <Row justify="space-between" align="middle" style={{ height: 480 }}>
          <Col span={10}>
            <Title className="h1">
              My Trip My Adventure,
              <br /> Start Next Vacation
            </Title>
            <p>
              We provide what you need to enjoy you vacation with your family.
              It's time to create unforgettable moments.
            </p>
            <Button type="primary" htmlType="submit" className="btn-show-me">
              Show Me Now
            </Button>
          </Col>
          <Col span={12} style={{ padding: "0 0 0 50px" }}>
            <Carousel autoplay>
              {IMAGE_ITEM.map((item) => (
                <div className="carousel-item" key={item.key}>
                  <img src={item.img} />
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
      </section>

      <section id="room">
        <Row justify="space-between" style={{ marginBottom: 20 }}>
          <Title level={4}>Houses With Beauty Backyard</Title>
          <Link to="/rooms" className="btn-view-all">
            View All
          </Link>
        </Row>
        <Row gutter={[30, 30]} justify="space-between">
          {ROOM_DATA.map((room, index) => (
            <Col key={index} span={6}>
              <Card
                className="card-list-room"
                hoverable
                cover={<img src={room.image} />}
              >
                <Meta title={room.title} description={room.location} />
                <p className="price">
                  <span>Rp {room.price}</span>/malam
                </p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
}

export default HomePage;
