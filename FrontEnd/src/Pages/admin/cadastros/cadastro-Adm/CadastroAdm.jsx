import React from "react";
import styles from "./CadastroAdm.module.css";

import Navbar from "../../../../components/navbar/Navbar";
import Input from "../../../../components/input/Input";

import { FaUser, FaUserTie } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { HiIdentification } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

const CadastroAdm = () => {
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
							<Input label="Nome" type="text" id="nome" placeholder="" />
						</div>

						<div className={styles.dadosUser}>
							<div className={styles.input} id={styles.edv}>
								<HiIdentification size={20} className={styles.icon} />
								<div className={styles.line}></div>
								<Input label="Edv" type="number" id="edv" placeholder="" />
							</div>
							<div className={styles.input} id={styles.area}>
								<FaGear size={20} className={styles.icon} />
								<div className={styles.line}></div>
								<Input label="area" type="text" id="area" placeholder="" />
							</div>
						</div>

						<div className={styles.input}>
							<MdEmail size={20} className={styles.icon} />
							<div className={styles.line}></div>
							<Input label="Email" type="text" id="emailFocal" placeholder="" />
						</div>
					</div>

					<div className={styles.bts}>
						<button className={styles.bt} type="submit">
							<h1>Continuar</h1>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CadastroAdm;
