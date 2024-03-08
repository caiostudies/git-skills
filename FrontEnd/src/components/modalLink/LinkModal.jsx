import React, { useState } from "react";
import styles from "./LinkModel.module.css";

const LinkModal = ({ onClose, onSave }) => {
	const [link, setLink] = useState("");

	const handleLinkChange = (e) => {
		setLink(e.target.value);
	};

	const handleSave = () => {
		onSave(link);
		setLink("");
	};

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.contClose}>
					<span className={styles.btClose} onClick={onClose}>
						&times;
					</span>
					<div className={styles.tModal}>
						<h2>Adicionar Link</h2>
					</div>
				</div>
				<div className={styles.fields}>
					<input
						className={styles.inpLink}
						type="text"
						value={link}
						onChange={handleLinkChange}
            placeholder="Adicionar Link"
					/>
					<button className={styles.btOk} onClick={handleSave}>
						Ok
					</button>
				</div>
			</div>
		</div>
	);
};

export default LinkModal;
