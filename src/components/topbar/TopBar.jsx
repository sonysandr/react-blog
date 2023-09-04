// import React from 'react'

import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  // const user = true;
  const user = false;

  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcons fa-brands fa-square-facebook"></i>
        <i className=" topIcons fa-brands fa-square-twitter"></i>
        <i className=" topIcons fa-brands fa-square-pinterest"></i>
        <i className=" topIcons fa-brands fa-square-instagram"></i>
        <i className=" topIcons fa-brands fa-square-whatsapp"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/gallery" className="link">
              GALLERY
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link">{user && "LOGOUT"}</Link>
            
          </li>
          {/*we defined link className as global in index.html */}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="userimage"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
