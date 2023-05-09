import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM_CUSTOMER = [
  {
    label: <Link to="/">Home</Link>,
    key: "/",
  },
  {
    label: <Link to="/rooms">Room</Link>,
    key: "/rooms",
  },
  {
    label: <Link to="/about-us">About us</Link>,
    key: "/about-us",
  },
  // {
  //   label: (
  //     <Link to="/">
  //       <Button
  //         type="primary"
  //         onClick={() => {
  //           localStorage.removeItem("token");
  //         }}
  //         danger
  //       >
  //         Logout
  //       </Button>
  //     </Link>
  //   ),
  //   key: "5",
  // },
  {
    label: (
      <Link to="/login">
        <Button type="primary">Login</Button>
      </Link>
    ),
    key: "5",
  },
];
