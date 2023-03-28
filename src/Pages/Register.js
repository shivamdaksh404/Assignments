import React from "react";
import NavBar from "../components/NavBar";
// import { HiOutlineMail} from 'react-icons/hi'
// import { FaUser} from 'react-icons/fa'
// import { AiFillLock} from 'react-icons/ai'
// import {FaUserCircle} from 'react-icons/fa'
import "./Login&Register.css";

export default function Register() {
  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <div className="from">
          <img
            className="image"
            src="https://png.pngtree.com/png-vector/20190114/ourmid/pngtree-vector-add-user-icon-png-image_313043.jpg"
            alt=""
          />
          <div className="inputDiv">
            <input
              className="emailInput"
              placeholder="EMAIL"
              // {<HiOutlineMail/>}
            />
            <br />
            <input className="userNameInput" placeholder="USERNAME" />
            <br />
            <input className="passwordInput" placeholder="PASSWORD" />
          </div>
          <br />
          <button className="button">Register</button>
        </div>
      </div>
    </>
  );
}
