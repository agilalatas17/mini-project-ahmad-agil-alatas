import React, { useState } from "react";
import "./detailRoomCustomerPage.css";
import Gap from "../../../../components/Gap/Gap";
import LoadingComponent from "../../../../components/LoadingComponent/LoadingComponent";
import dayjs from "dayjs";
import {
  Row,
  Col,
  Space,
  Image,
  Typography,
  Card,
  DatePicker,
  Form,
  Input,
  Button,
} from "antd";
import { useParams } from "react-router-dom";

function DetailRoomCustomerPage() {
  const { uuid } = useParams();
  const { Title } = Typography;

  // Regex Validasi
  const noHandphoneRegex = /^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/;

  const [userInput, setUserInput] = useState({});

  return (
    <>
      <section id="detail-room-customer">
        <Row justify="center">
          <Space direction="vertical" align="center">
            <Title level={2}>Nama room</Title>
            <div>
              <Space direction="horizontal" align="center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    style={{ width: 16, height: 16 }}
                  >
                    <path
                      fill="currentCollor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                Lokasi
              </Space>
            </div>

            <Image
              src=""
              height={400}
              style={{ borderRadius: 15, display: "block", margin: "48px 0" }}
            />
          </Space>
        </Row>

        <Gap height={32} />

        <Row>
          <Col span={14}>
            <Title level={5}>Deskripsi</Title>
            <p></p>
          </Col>

          <Col span={10}>
            <Card
              className="booking-form-card"
              size="large"
              title="Form Pemesanan"
            >
              <Title level={3} style={{ marginBottom: 32 }}>
                Rp 203103 <span>/malam</span>
              </Title>

              <Form layout="vertical">
                <Form.Item
                  label="Nama Pemesan"
                  name="nama_pemesan"
                  rules={[
                    {
                      required: true,
                      message: "Masukkan Nama",
                    },
                    {
                      whitespace: true,
                      message: "Tidak boleh diawali spasi",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Nomer Whatsapp"
                  name="no_handphone"
                  rules={[
                    {
                      required: true,
                      message: "Masukkan No handphone",
                    },
                    {
                      pattern: noHandphoneRegex,
                      message: "No Handphone tidak valid",
                    },
                    {
                      whitespace: true,
                      message: "Tidak boleh diawali spasi",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Row justify="space-between" style={{ marginBottom: 32 }}>
                  <Form.Item
                    label="Tanggal Check-In"
                    name="tgl_check_in"
                    rules={[
                      {
                        required: true,
                        message: "Masukkan tanggal check-in",
                      },
                    ]}
                    style={{ width: "calc(50% - 8px)" }}
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item
                    label="Tanggal Check-Out"
                    name="tgl_check_out"
                    rules={[
                      {
                        required: true,
                        message: "Masukkan tanggal check-out",
                      },
                    ]}
                    style={{ width: "calc(50% - 8px)" }}
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                </Row>

                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Pesan Sekarang
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default DetailRoomCustomerPage;