import Navbar from "../../../components/navbar/Navbar";
import styles from "./Hub.module.css";
import Card from "../../../components/cards/cardTri/Card";

const Hub = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<section className={styles.trilhas}>
				<Card url={"/trilha"} />
				<Card url={"/criacao"} />
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