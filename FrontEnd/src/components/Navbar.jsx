import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import EditIcon from "@mui/icons-material/Edit";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <Link to={"/"}>
            <HomeOutlinedIcon style={{fontSize:"35px"}} className="logo" />
          </Link>
        </div>

        <div className="links">
          <ul className="links-ul">
            <li className="links-li">
              <Link className="text-deco" to="/">
                Home
              </Link>
            </li>
            <li className="links-li">
              <Link className="text-deco" to="/details">
                Beds
              </Link>
            </li>
            <li className="links-li">
              <Link className="text-deco">Blood Bank</Link>
            </li>
          </ul>
        </div>

        <div className="social-icons">
          <a href="http://www.twitter.com">
            <FaTwitter className="icons" />
          </a>
          <a href="http://www.google.com">
            <FaTwitter className="icons" />
          </a>
          <a href="http://www.github.com">
            <FaTwitter className="icons" />
          </a>

          <Link to={"/add"}>
            <EditIcon className="icons" />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
