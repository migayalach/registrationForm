import React, { useState } from "react";
import styles from "./home.module.css";

const Home = ({ handleSaludo }) => {
  return (
    <div className={styles["home-container"]}>
      <h1>HOME</h1>
    </div>
  );
};

export default Home;
