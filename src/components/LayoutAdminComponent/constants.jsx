import { CalendarOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const SIDER_ITEM = [
  {
    key: "/booking",
    icon: <CalendarOutlined />,
    label: <Link to="/booking">Booking</Link>,
  },
  {
    key: "/room",
    icon: <HomeOutlined />,
    label: <Link to="/room">Room</Link>,
  },
];
