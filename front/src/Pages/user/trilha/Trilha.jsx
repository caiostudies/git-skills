import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import styles from "./Trilha.module.css";

import CorpoTri from "../../../components/corpoTri/CorpoTri";
import CriarTri from "../../../components/criarTri/CriarTri";

const Trilha = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cont}>
        <div className={styles.bgc}>
          <div className={styles.imgMask}>
            <img src="src\components\assets\react.png" alt="" />
          </div>
          <div className={styles.texts}>
            <div className={styles.title}>
              <h1>Trilha de Deselvolvimento BackEnd</h1>
            </div>
            <div className={styles.desc}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                hendrerit mollis massa, sed dignissim purus mollis quis. Fusce
                finibus augue id nunc molestie porttitor. Curabitur gravida
                neque justo, dapibus dapibus odio pharetra nec. Sed vehicula
                pretium nibh, ut rutrum erat blandit ac. Nunc in augue in felis
                hendrerit commodo. Donec nec neque tempus, suscipit justo a,
                malesuada diam. In eget massa diam
              </p>
            </div>
            <div className={styles.infos}>
              <div className={styles.txt}>
                <h4>Carga Horaria:</h4>
                <p>50 Horas</p>
              </div>
              <div className={styles.txt}>
                <h4>Porcentagem Concluida:</h4>
                <p>50 Horas</p>
              </div>
              <div className={styles.txt}>
                <h4>Carga Horaria:</h4>
                <p>50 Horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CorpoTri/>
    </div>
  );
};

export default Trilha;
