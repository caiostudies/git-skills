// import React from "react";
import Navbar from "../../../components/navbar/Navbar";
import styles from "./Trilha.module.css";

import CorpoTri from "../../../components/corpoTri/CorpoTri";
import CriarTri from "../../../components/criarTri/CriarTri";
import TextField from '@mui/material/TextField';
import Input from "../../../components/input/Input";

import axios from "axios";
// import React, { useEffect } from "react";
import api from "../../../api";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const Trilha = () => {
  const [nome, setNome] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [focal_point, setFocal_point] = React.useState('');
  const [criador_trilha, setCriador_trilha] = React.useState('');
  const [carga_horaria, setCarga_horaria] = React.useState('');
  // /api/v1/trail/trailsfocal/{focalPoint}
  const [focalPoint, setFocalPoint] = useState("");

  const get_data = () =>{
    // console.log(token)
    axios.get(`http://127.0.0.1:8000/api/v1/trail/trailsfocal/${focalPoint}`,
    // {headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyMzIwOTMyLCJpYXQiOjE3MDIzMTczMzIsImp0aSI6IjllM2NkNmYyZWRiNDQ0NGE4YmMzYWZkYTY1MjVkZTMxIiwidXNlcl9pZCI6NH0.-9h-EG7Qr6uARsEWUKeuUa9Q_pF7ujjGPXRphtvN2Bc"}}
   //{headers: {Authorization: `Bearer ${token}`}}
    )
    .then((response)=>{
      console.log(response.data)
      setNome(response.data.nome)
      setDesc(response.data.desc)
      setFocal_point(response.data.focal_point)
      setCriador_trilha(response.data.criador_trilha)
      setCarga_horaria(response.data.carga_horaria)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

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
              <TextField 
                id="outlined-controlled"
                label="Email"
                value={nome}
              />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                hendrerit mollis massa, sed dignissim purus mollis quis. Fusce
                finibus augue id nunc molestie porttitor. Curabitur gravida
                neque justo, dapibus dapibus odio pharetra nec. Sed vehicula
                pretium nibh, ut rutrum erat blandit ac. Nunc in augue in felis
                hendrerit commodo. Donec nec neque tempus, suscipit justo a,
                malesuada diam. In eget massa diam
              </p>
            </div>

            <Input
                label="Focal Point"
                type="text"
                id="focal"
                placeholder=""
                value={focalPoint}
                onChange={(e) => setFocalPoint(e.target.value)}
            />
            <button onClick={get_data}>api</button>


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
