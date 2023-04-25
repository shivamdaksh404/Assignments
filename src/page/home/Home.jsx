import React, { Fragment } from "react";
import style from "./Home.module.css";
import ToDo from "../ToDo/ToDo";

export default function Home() {
  return (
    <Fragment>
      <div className={style.mainContainer}>
      <h1>ToDo App</h1>
      <hr/>
      </div>
      <ToDo/>

    </Fragment>
  );
}
