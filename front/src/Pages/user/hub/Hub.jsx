import Navbar from "../../../components/navbar/Navbar";
import styles from "./Hub.module.css";
import Card from "../../../components/cards/cardTri/Card";
import { useNavigate, Link } from "react-router-dom";
import api from "../../../api";
import React, { useState } from "react";
import Input from "../../../components/input/Input";
import axios from "axios";


const Hub = () => {
	const navigate = useNavigate();

	const [nome, setNome] = React.useState('');
	const [desc, setDesc] = React.useState('');
	const [focal_point, setFocal_point] = React.useState('');
	const [criador_trilha, setCriador_trilha] = React.useState('');
	const [carga_horaria, setCarga_horaria] = React.useState('');
	const [conteudo, setConteudo] = React.useState('');
	const [image_trail, setImage_trail] = React.useState('');
  
	const [id, setId] = useState(""); //Para o get

	const get_trail = async () => {

		try {
			const user = await axios.get(`${api}/api/v1/trail/trails/${id}`, {})
	
			console.log(user.data)
			if (user.data) {
			console.log("Nome da Trilha:", user.data[0].nome)
			setNome(user.data[0].nome)
			setDesc(user.data[0].desc)
			setFocal_point(user.data[0].focal_point)
			setCriador_trilha(user.data[0].criador_trilha)
			setCarga_horaria(user.data[0].carga_horaria)
			setImage_trail(user.data[0].image_trail)
			localStorage.setItem("Fp", focal_point);
			}
		} catch (error) {
			console.log("error")
		}
	}


	return (
		<div className={styles.container}>
			<Navbar />
			<Input
			label="Trail ID"
			type="text"
			id="focal"
			placeholder=""
			onChange={(e) => setId(e.target.value)}
			/>
			<button onClick={get_trail}>edit</button>

			<section className={styles.trilhas}>
				<Card url={"/trilha"} nome={nome} lider={focal_point} time="DS6" cargHora="50" img="src\components\assets\ca.jfif"/>
				<Card url={"/criartrilha"} nome="Trilha UI/UX" lider="Vanessa" time="DS6" cargHora="50"/>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</section>

			
		</div>
	);
};

export default Hub;