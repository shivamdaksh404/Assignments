import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./Login&Register.css";
export default function Login() {
  return (
    <>
    <NavBar/>
    <div className="mainContainer">
      <div className="from">
      <img
        className="image"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
        alt="profile"
      />
        <div className="inputDiv">
          <br />
          <input
            className="userNameInput"
            placeholder="USERNAME"
            type="email"
          />
          <br />
          <input
            className="passwordInput"
            placeholder="PASSWORD"
            type="password"
          />
        </div>
        <div className="buttonDiv">
          <p className="registerLink">
            Don't have an account?
            <br />
            <Link to="/register">Register</Link>
          </p>
          <button className="button">Login</button>
        </div>
      </div>
    </div>
    </>
  );
}
