import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	const Login = () => {
		navigate("/");
	};

	const Hub = () => {
		navigate("/hub");
	};
 
	return (
		<div className={styles.container}>
			<div className={styles.contFlex }>
				<div className={styles.logo}>
					<img src="src\components\assets\logoSkill-B.svg" alt="Logo" />
				</div>
				<div className={styles.contBt}>
					<div className={styles.bts}>
						<button className={styles.btTri} onClick={Hub}>
							<h1>Suas Trilhas</h1>
						</button>
						<button className={styles.btEx} onClick={Login}>
							<h1>Sair</h1>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;