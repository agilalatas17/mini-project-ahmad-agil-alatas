import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  Row,
  Space,
  Table,
  Typography,
  Image,
  message,
  Popconfirm,
} from "antd";
import { Link } from "react-router-dom";
import { GET_ROOMS, DELETE_ROOM } from "./query/room-query";
import "./room.css";

function Room() {
  const { Title } = Typography;

  // GET Data
  const {
    data: roomData,
    loading: isRoomLoading,
    error: isRoomError,
  } = useQuery(GET_ROOMS);
  console.log(roomData);

  // Delete Data
  // const [deleteRoom, { loading: loadingDelete }] = useMutation(DELETE_ROOM, {
  //   refetchQueries: [GET_ROOMS],
  // });

  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const TABLE_COLUMNS = [
    {
      title: "Image",
      dataIndex: "images_room",
      key: "images_room",
      render: (_, record) => <Image src={record.images_room[0]} width={200} />,
    },
    {
      title: "Nama Room",
      dataIndex: "nama_room",
      key: "nama_room",
    },
    {
      title: "Lokasi",
      dataIndex: "lokasi",
      key: "lokasi",
    },
    {
      title: "Harga",
      dataIndex: "harga",
      key: "harga",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) =>
        roomData?.booking_app_room.length >= 1 ? (
          <Space>
            <Link to="#" className="btn-detail">
              Detail
            </Link>
            <Link onClick={() => handleEdit(record)} className="btn-edit">
              Edit
            </Link>

            <Popconfirm
              title="Sure to Delete?"
              arrow={false}
              onConfirm={() => onDelete(record.uuid)}
            >
              <Link className="btn-delete">Delete</Link>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  //   to handle edit button
  // const handleEdit = (row_data) => {
  //   console.log("handle edit btn", row_data);
  //   setRowData(row_data);
  //   setIsEdit(true);
  //   setAvatar(row_data.avatar);
  //   formBio.setFieldsValue({
  //     firstName: row_data.firstName,
  //     lastName: row_data.lastName,
  //     nim: row_data.nim,
  //     address: row_data.address,
  //   });
  // };

  //   to handle cancel button
  // const handleCancel = () => {
  //   console.log("handle canncel");
  //   setRowData();
  //   setAvatar("");
  //   setIsEdit(false);
  //   formBio.resetFields();
  // };

  //   Delete Data from table
  // const onDelete = (row_id) => {
  //   deleteRoom({
  //     variables: { uuid: row_id },
  //     onError: (err) => {
  //       message.open({
  //         type: "error",
  //         content: `${err?.message}`,
  //       });
  //     },
  //   });
  // };

  useEffect(() => {
    if (isRoomError) {
      message.open({
        type: "error",
        content: `${isRoomError?.message}`,
      });
    }
  }, [isRoomError]);

  return (
    <>
      <Row>
        <Title level={3}>List Room</Title>
        <Link className="btn-add">Tambah Data</Link>
      </Row>
      <Row>
        <Table
          className="table-room"
          rowKey="uuid"
          columns={TABLE_COLUMNS}
          dataSource={roomData?.booking_app_room}
          loading={isRoomLoading}
          style={{ width: "100%", marginTop: 48 }}
        />
      </Row>
    </>
  );
}

export default Room;
