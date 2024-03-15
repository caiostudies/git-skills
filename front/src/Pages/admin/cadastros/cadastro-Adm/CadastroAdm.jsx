
import styles from "./CadastroAdm.module.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../../../../components/navbar/Navbar";
import Input from "../../../../components/input/Input";

import { FaUser, FaUserTie } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { HiIdentification } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

const CadastroAdm = () => {
	const navigate = useNavigate();
	const [nome, setNome] = useState("");
	const [edv, setEdv] = useState("");
	const [area, setArea] = useState("");
	const [focal_point, setFocal] = useState("");
	const [email, setEmail] = useState("");

	const cadastrationAdm = async (e) => {
		e.preventDefault();
		console.log("OI oi");
	
		if (!nome || !edv || !area || !focal_point || !emailFocal) {
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
		  const NewUser = await axios.post(`${api}/api/v1/admin/singleRegisterAdmin`, {
			name: nome,
			edv: edv,
			email_user: email,
			user_area: area,
			focal_point: focal_point,
			// admin_email: emailFocal,
			percentage: 0,
			typeUser: "",
			is_activate: 0,
			hashed_password: edv,
			image_user: ""
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
			<form className={styles.contJust}>
				<div className={styles.contLogin}>
					<div className={styles.logo}>
						<img src="src\components\assets\logoSkill-B.svg" alt="logo" />
					</div>
					<div className={styles.inputs}>
						<div className={styles.input}>
							<FaUser size={20} className={styles.icon} />
							<div className={styles.line}></div>
							<Input label="Nome" type="text" id="nome" placeholder="" value={nome} onChange={(e) => setNome(e.target.value)} />
						</div>

						<div className={styles.dadosUser}>
							<div className={styles.input} id={styles.edv}>
								<HiIdentification size={20} className={styles.icon} />
								<div className={styles.line}></div>
								<Input label="Edv" type="number" id="edv" placeholder="" value={edv} onChange={(e) => setEdv(e.target.value)} />
							</div>
							<div className={styles.input} id={styles.area}>
								<FaGear size={20} className={styles.icon} />
								<div className={styles.line}></div>
								<Input label="area" type="text" id="area" placeholder="" value={area} onChange={(e) => setArea(e.target.value)} />
							</div>
						</div>

						<div className={styles.input}>
							<MdEmail size={20} className={styles.icon} />
							<div className={styles.line}></div>
							<Input label="Email" type="text" id="emailFocal" placeholder="" value={email} onChange={(e) => setEmai(e.target.value)}/>
						</div>
					</div>

					<div className={styles.bts}>
						<button className={styles.bt} type="submit" onClick={CadastroAdm}>
							<h1>Continuar</h1>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CadastroAdm;
