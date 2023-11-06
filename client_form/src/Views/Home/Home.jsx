// COMPONET'S

// HOOK'S
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// JAVASCRIP

// REDUX

// STYLESHEET'S
import styles from "./home.module.css";

const Home = () => {
  const selectData = useSelector((state) => state.auxUser);
  const name = selectData[0]?.name;
  const unit = selectData[0]?.unit;

  return (
    <div className={styles["home-container"]}>
      <h1>Bienvenido</h1>
      <h3>{name}</h3>
      <h3>Encargad@ de: {unit}</h3>
    </div>
  );
};

export default Home;
