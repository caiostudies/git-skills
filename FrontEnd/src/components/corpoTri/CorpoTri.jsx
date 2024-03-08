import React from "react";
import styles from "./CorpoTri.module.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";

const CorpoTri = () => {
    const trilhaSalva = JSON.parse(localStorage.getItem("trilha")) || [];

    return (
        <div className={styles.container}>
            <VerticalTimeline className={styles.trilhaImg}>
                {trilhaSalva.map((elemento, index) => (
                    <VerticalTimelineElement
                        key={index}
                        contentStyle={{
                            background: "#007BC0",
                            color: "#fff",
                            boxShadow: "0px 0px 0px 0px",
                        }}
                        contentArrowStyle={{ borderRight: "7px solid #007BC0" }}
                        iconStyle={{ background: "#007BC0", color: "#fff" }}
                    >
                        <h1>{elemento.titulo}</h1>
                        {elemento.topicos.map((topico, topicoIndex) => (
                            <li key={topicoIndex}>
                                {topico.link ? (
                                    <a href={topico.link}>{topico.texto}</a>
                                ) : (
                                    <span>{topico.texto}</span>
                                )}
                            </li>
                        ))}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default CorpoTri;