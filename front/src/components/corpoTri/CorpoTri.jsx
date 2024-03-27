import React, { useState, useEffect } from "react";
import styles from "./CorpoTri.module.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import axios from "axios";
import api from "../../api";
import Input from "../input/Input";

const CorpoTri = () => {
  const [trilhaSalva, setTrilhaSalva] = useState([]);

  const [focalPoint, setFocalPoint] = useState(""); //Para o get

  useEffect(() => {
    getTrilha(); // Chame a função para buscar dados ao montar o componente
  }, []);

  const getTrilha = async () => {
    const focalPoint = localStorage.getItem("Fp");
    try {
      const response = await axios.get(`${api}/api/v1/trail/trailsfocal/${focalPoint}`);
      if (response.data[0].conteudo > 0 && Array.isArray(response.data[0].conteudo)) {
        setTrilhaSalva(response.data[0].conteudo);
      } else {
        console.log("Nenhum conteúdo de trilha encontrado.");
      }
    } catch (error) {
      console.log("Erro ao buscar dados da trilha:", error);
    }
  };

  return (
    <div className={styles.container}>
      <VerticalTimeline className={styles.trilhaImg}>
        {trilhaSalva.map((elemento, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{ background: "#007BC0", color: "#fff", boxShadow: "0px 0px 0px 0px" }}
            contentArrowStyle={{ borderRight: "7px solid #007BC0" }}
            iconStyle={{ background: "#007BC0", color: "#fff" }}
          >
            <h1>{elemento.titulo}</h1>
            <ul>
              {elemento.topicos.map((topico, topicoIndex) => (
                <li key={topicoIndex}>
                  {topico.link ? (
                    <a href={topico.link}>{topico.texto}</a>
                  ) : (
                    <span>{topico.texto}</span>
                  )}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Input
              label="Focal Point"
              type="text"
              id="focal"
              placeholder=""
              value={focalPoint}
              onChange={(e) => setFocalPoint(e.target.value)}
            />
            <button onClick={getTrilha}>api</button>
    </div>
    
  );
};

export default CorpoTri;
