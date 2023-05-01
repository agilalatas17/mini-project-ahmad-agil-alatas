import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
  },
  {
    label: <Link to="/room">Room</Link>,
    key: "/room",
  },
  {
    label: <Link to="/about-us">About Us</Link>,
    key: "/about-us",
  },
  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "5",
  },
];
