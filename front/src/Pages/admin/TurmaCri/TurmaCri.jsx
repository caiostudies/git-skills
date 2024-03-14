
import styles from "./TurmaCri.module.css";
import Navbar from "../../../components/navbar/Navbar";
import Input from "../../../components/input/Input";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { TbPhotoPlus } from "react-icons/tb";

const TurmaCri = () => {
  const navigate = useNavigate();
  const [lider, setLider] = useState("");
  const [team_name, setTeam_name] = useState("");
  const [image_team, setImage_team] = useState("");


	const setArquivo = (e) => {
		setFile(e.target.files[0]);
	};

	const getArquivo = () => {
		document.getElementById("fileInput").click();
	};

	const createTeam = async (e) => {
		e.preventDefault();
		console.log("Team");
	
		if (!lider || !team_name) {
		  toast.error("Preencha todos os campos para ser feito o cadastro", {
			position: "top-right",
			autoClose: 1800,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		  });
		  return;
		}
	
		try {
		  const NewTeam = await axios.post(`${api}/api/v1/turmas/createTeams`, {
			lider: "lider",
			team_name: team_name,
			// image_team: "",
	
		  });
		  toast.success("Cadastro feito com sucesso", {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		  });
		} catch (error) {
		  console.error("Erro na requisição:", error);
		}
	  };

	return (
		<div className={styles.container}>
			<Navbar />

			<div className={styles.addFoto}>
				<input
					type="file"
					onChange={setArquivo}
					id="fileInput"
					style={{ display: "none" }}
				/>
				<button className={styles.bt} onClick={getArquivo}>
					<TbPhotoPlus size={75} />
					<h1>Adicionar Foto</h1>
				</button>
				<div className={styles.inp}>
					<Input placeholder="" id="nameTeam" label="Nome da Trilha"  onChange={(e) => setTeam_name(e.target.value)} />
				</div>
			</div>
			<div className={styles.footer}>
				<button  className={styles.send} onClick={createTeam}>
					Cadastrar
				</button>
			</div>
		</div>
	);
};

export default TurmaCri;
