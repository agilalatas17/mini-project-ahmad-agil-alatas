import React from "react";
import "./roomCustomerPage.css";
import Gap from "../../components/Gap/Gap";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { Row, Col, Space, Card, Typography } from "antd";
import { GET_ROOMS } from "../HomePage/query/room-query";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

function RoomCustomerPage() {
  const { Title } = Typography;
  const { Meta } = Card;

  const {
    data: roomCustomerData,
    loading: roomCustomerLoading,
    error: roomCustomerError,
  } = useQuery(GET_ROOMS);

  return (
    <>
      <section id="customer-all-room">
        <Title>All Room</Title>

        <Gap height={32} />

        <Row gutter={[30, 30]} justify="space-between">
          {roomCustomerLoading ? (
            <LoadingComponent />
          ) : (
            roomCustomerData?.booking_app_room?.map((room, index) => (
              <Col key={index} span={6}>
                <Link to={`/room-customer/${room.uuid}`}>
                  <Card
                    className="card-list-room"
                    hoverable
                    cover={<img src={room.image} />}
                  >
                    <Meta title={room.nama_room} description={room.lokasi} />
                    <p className="price">
                      <span>Rp {room.harga}</span>/malam
                    </p>
                  </Card>
                </Link>
              </Col>
            ))
          )}
        </Row>
      </section>
    </>
  );
}

export default RoomCustomerPage;
