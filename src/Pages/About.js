import React from "react";
import NavBar from "../components/NavBar";
import style from "./About.module.css";

export default function About() {
  return (
    <div>
      <NavBar />

      <div className={style.headingDiv}>
        <h1>About Us</h1>
      </div>
      <div className={style.mainContainer}>
        <div className={style.profile}>
          <img
            className={style.profilePhoto}
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
            alt=""
          />
          <span>Age:23</span>
          <span>Location: India</span>
        </div>
        <div className={style.details}>
          <div className={style.aboutMe}>
            <h1>Shivam</h1>
            <h4>
              Hello, My name is Shivam. I am from Delhi and I have completed my
              graduation from MJPRU in 2022. Now I am a trainee in function up.
              <br />
              Freelancer in Digitel Marketing which includes digital strategy
              against SEO(Search Engine Optimization), SEM, SMM, SMO, PPC,
              Adwords Strategy Building, Inbound Marketing, Re-marketing,
              Display Advertisement, and know much more. Please get in touch for
              any digital marketing requirements.
            </h4>
          </div>

          <div className={style.myDetails}>
            <div>
              <p>
                {" "}
                What have you skills?
                <br /> This is my skills. Freelancer| Digital Marketer | SEO
                Specialist | E-mail Marketing | Google Analytics | Web Developer
                |
              </p>
            </div>

            <div>
              <p>
                {" "}
                What are my hobbies?
                <br /> Traveling
                <br /> Watch Sci-fi movies
                <br />
                Learn New Thing Every Time.
              </p>
            </div>
            <div>
              <p>
                {" "}
                What are you learning?
                <br />
                React is a JavaScript-based UI development library. Facebook and
                an open-source developer community run it. Although React is a
                library rather than a language, it is widely used in web
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
