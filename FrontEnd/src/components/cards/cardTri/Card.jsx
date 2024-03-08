import React, { useState } from "react";
import styles from "./Card.module.css";
import ProgressBar from "../../progress/ProgressBar";
import { useNavigate } from "react-router-dom";

const Card = () => {
	const [progressoTrilha, setProgressoTrilha] = useState(0); // Estado para manter o progresso da trilha UI/UX

	const atualizarProgresso = (novoProgresso) => {
	  setProgressoTrilha(novoProgresso);
	};
  
	return (
	  <div className={styles.contTri}>
		<div className={styles.imgMask}>
		  {/* <img src="src\components\assets\react.png" /> */}
		  <img src="src\components\assets\figma.jpg" />
		</div>
		<div className={styles.details}>
		  <div className={styles.front}>
			<div className={styles.infosF}>
			  <h1>Trilha UI/UX</h1>
			  <p>Lider: Vanessa</p>
			  <p>Turma: Ds6</p>
			</div>
		  </div>
		  <div className={styles.back}>
			<div className={styles.infosB}>
			  <h1>Trilha UI/UX</h1>
			  <p>Clique para começar a trilha</p>
			</div>
			<div className={styles.contmib}>
			  <div className={styles.mInfosB}>
				<p>Carga Horaria: 50 horas</p>
				<p>Porcentagem: {progressoTrilha}%</p> 
			  </div>
			  {/* <div className={styles.mInfosB}>
				<h1>CONCLUIDA</h1>
			  </div> */}
			</div>
			<div className={styles.progress}>
			  <ProgressBar progress={progressoTrilha} atualizarProgresso={atualizarProgresso} /> {/* Passa o progresso da trilha e a função de atualização como props */}
			</div>
		  </div>
		</div>
	  </div>
	);
  };

export default Card;

{/* <div className={styles.header}>
	<div className={styles.titles}>
		<h1>Trilha DEV</h1>
	</div>
	<div className={styles.progress}>
		<ProgressBar progress={progress} r />
	</div>
</div>

<div className={styles.bts}>
	<button className={styles.bt} onClick={trilha}>
		<h1>Iniciar</h1>
	</button>
	<button className={styles.bt} onClick={simulateProgress}>
		<h1>Iniciar</h1>
	</button> 
</div> */}