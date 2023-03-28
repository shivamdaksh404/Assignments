import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

export default function NavBar() {
  const links = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "About",
      path: "/about",
    },
    {
      link: "Login",
      path: "/login",
    },
  ];

  return (
    <div className={style.navBar}>
    {links.map((ele)=> ( <span>
      <Link to={ele.path}> {ele.link} </Link>
    </span>))}
      <img 
        className={style.userIcon}
        src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
        alt="icon"
      />
    </div>
  );
}
