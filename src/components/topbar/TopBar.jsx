// import React from 'react'

import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i  className=" topIcons fa-brands fa-square-facebook"></i>
        <i  className=" topIcons fa-brands fa-square-twitter"></i>
        <i  className=" topIcons fa-brands fa-square-pinterest"></i>
        <i  className=" topIcons fa-brands fa-square-instagram"></i>
        <i  className=" topIcons fa-brands fa-square-whatsapp"></i>
      </div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">GALLERY</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
       <img className="topImg"
        src="https://images.pexels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="userimage" />
       <i className = "topSearchIcon fa-solid fa-magnifying-glass" ></i>
      </div>
    </div>
  );
}
