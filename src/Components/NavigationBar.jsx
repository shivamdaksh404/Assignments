import React, { useState } from "react";
import "./NavigationBar.css";
import { FcWiFiLogo } from "react-icons/fc";

export default function NavigationBar() {
  // const styles = {
  //   display: "flex",
  //   backgroundColor: "red",
  // }

  return (
    <div className="MainContainer">
      <Nav />
      <Hero />
    </div>
  );
}

function Nav() {
  const [bar, setBar] = useState(false);
  const styles = {
    border: "solid 2px rebeccapurple",
    borderRadius: "12px",
    height: "31px",
    width: "80px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginBottom: "0.3em"
  };

  return (
    <div className="navigation">
      <div className="logo">
        <FcWiFiLogo size={50} />
      </div>
      <nav className="nav">
        <ul className="ulLeft">
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>

        <ul className="ulRight">
          <li style={styles}>Login</li>
          <li style={styles}>Sign Up</li>
        </ul>
      </nav>
      <button className="btn" onClick={() => setBar(!bar)}>
        {" "}
        &#8801;
      </button>
      {bar && <MobileBar />}
    </div>
  );
}
function MobileBar() {
  const styles = {
    border: "solid 2px rebeccapurple",
    borderRadius: "12px",
    height: "31px",
    width: "80px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  };

  return (
    <div className="MobileView">
      <nav className="mobileNavigation">
        <ul className="mobileUlLeft">
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>

        <ul className="mobileUlRight">
          <li style={styles}>Login</li>
          <li style={styles}>Sign Up</li>
        </ul>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <div className="Headings">
      <span>This is Demo for Page Full Weigth</span>
      <br />
      <span>This is Demo for Mobile Half Weigth</span>
    </div>
  );
}
