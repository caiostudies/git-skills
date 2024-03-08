import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import styles from "./MakeTri.module.css";

import CorpoTri from "../../../components/corpoTri/CorpoTri";
import CriarTri from "../../../components/criarTri/CriarTri";

const MakeTri = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <CriarTri/>
    </div>
  );
};

export default MakeTri;
