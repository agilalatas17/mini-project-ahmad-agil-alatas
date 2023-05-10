import React from "react";
import { Row, Table, Typography } from "antd";

function Booking() {
  const { Title } = Typography;
  return (
    <>
      <Title level={3}>Booking</Title>
      <Row>
        {/* <Table
          className="table-room"
          rowKey="uuid"
          columns={TABLE_COLUMNS}
          dataSource={roomData?.booking_app_room}
          loading={isRoomLoading}
          style={{ width: "100%", marginTop: 24 }}
        /> */}
      </Row>
    </>
  );
}

export default Booking;
