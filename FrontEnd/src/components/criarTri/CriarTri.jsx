import React, { useState } from "react";
import styles from "./CriarTri.module.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import LinkModal from "../modalLink/LinkModal";

import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";

const CriarTri = () => {
	const [elements, setElements] = useState([]);
	const [novoTitulo, setNovoTitulo] = useState("");
	const [showLinkModal, setShowLinkModal] = useState(false);
	const [currentElementIndex, setCurrentElementIndex] = useState(null);
	const [currenttopicoIndex, setCurrenttopicoIndex] = useState(null);

	const addElemento = () => {
		const novoElemento = {
			titulo: novoTitulo,
			topicos: [],
		};
		setElements([...elements, novoElemento]);
		setNovoTitulo("");
	};

	const setTitulos = (e, index) => {
		const novosElementos = [...elements];
		novosElementos[index].titulo = e.target.value;
		setElements(novosElementos);
	};

	const setTextos = (e, index, topicoIndex) => {
		const novosElementos = [...elements];
		novosElementos[index].topicos[topicoIndex].texto = e.target.value;
		setElements(novosElementos);
	};

	const addParagrafo = (index) => {
		const novosElementos = [...elements];
		novosElementos[index].topicos.push({ texto: "", link: false });
		setElements(novosElementos);
	};

	const setLink = (index, topicoIndex, checked) => {
		const novosElementos = [...elements];
		novosElementos[index].topicos[topicoIndex].link = checked;
		setElements(novosElementos);
	};

	const openLinkModal = (index, topicoIndex) => {
		setCurrentElementIndex(index);
		setCurrenttopicoIndex(topicoIndex);
		setShowLinkModal(true);
	};

	const closeLinkModal = () => {
		setShowLinkModal(false);
		setCurrentElementIndex(null);
		setCurrenttopicoIndex(null);
	};

	const saveLink = (link) => {
		const novosElementos = [...elements];
		novosElementos[currentElementIndex].topicos[currenttopicoIndex].link = link;
		setElements(novosElementos);
		closeLinkModal();
	};

	const salvarTrilha = () => {
		localStorage.setItem("trilha", JSON.stringify(elements));
		alert("Trilha salva com sucesso!");
	};

	return (
		<div className={styles.container}>
			{showLinkModal && (
				<LinkModal onClose={closeLinkModal} onSave={saveLink} />
			)}
			<div className={styles.contHeader}>
				<div className={styles.contImg}>
					<button className={styles.btImg}>
						<FiUpload size={75} />
						<h1>Enviar Imagen</h1>
					</button>
				</div>
				<div className={styles.bodyH}>
					<div className={styles.titleH}>
						<input
							className={styles.inpTitulo}
							placeholder="Adicionar Titulo"
						/>
					</div>
					<div className={styles.descH}>
						<textarea
							className={styles.desc}
							placeholder="Adicionar breve descrição da trilha"
							type="text"
						/>
					</div>
					<div className={styles.infosH}>
						<h4>Carga Horaria:</h4>
						<input className={styles.ch} type="text" />
					</div>
				</div>
			</div>
			<VerticalTimeline className={styles.tColor}>
				{elements.map((elemento, index) => (
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
						<div className={styles.contTitulos}>
							<div className={styles.titulo}>
								<input
									className={styles.inpTitulo}
									type="text"
									placeholder="Título"
									value={elemento.titulo}
									onChange={(e) => setTitulos(e, index)}
									id="titulo"
								/>
							</div>
						</div>
						{elemento.topicos.map((paragrafo, topicoIndex) => (
							<div key={topicoIndex}>
								<div className={styles.contItens}>
									<div className={styles.ifLink}>
										<input
											className={styles.itens}
											placeholder="Adicionar Texto"
											value={paragrafo.texto}
											onChange={(e) => setTextos(e, index, topicoIndex)}
										/>
										{paragrafo.link && (
											<button
												className={styles.btLink}
												onClick={() => openLinkModal(index, topicoIndex)}
											>
												<HiOutlinePencilAlt
													className={styles.iLink}
													size={30}
												/>
											</button>
										)}
									</div>
									<div className={styles.check}>
										<div className={styles.cLink}>
											<input
												className={styles.checkB}
												type="checkbox"
												checked={paragrafo.link || false}
												onChange={(e) =>
													setLink(index, topicoIndex, e.target.checked)
												}
											/>
											<p>Link</p>
										</div>
										<div className={styles.cLink}>
											<input
												type="checkbox"
												checked={paragrafo.link || false}
												onChange={(e) =>
													setLink(index, topicoIndex, e.target.checked)
												}
											/>
											<p>Modal</p>
										</div>
									</div>
								</div>
							</div>
						))}
						<div className={styles.contBtAdd}>
							<button
								className={styles.btAddItem}
								onClick={() => addParagrafo(index)}
							>
								+
							</button>
						</div>
						<h1 className={styles.titles}>{elemento.titulo}</h1>
						{elemento.topicos.map((paragrafo, topicoIndex) => (
							<li key={topicoIndex}>
								{paragrafo.link ? (
									<a className={styles.links} href={paragrafo.link.toString()}>
										{paragrafo.texto}
									</a>
								) : (
									<span>{paragrafo.texto}</span>
								)}
							</li>
						))}
					</VerticalTimelineElement>
				))}
				<div className={styles.bt}>
					<button onClick={addElemento} className={styles.btAd}>
						+
					</button>
				</div>
			</VerticalTimeline>
			<div className={styles.saveTri}>
				<button className={styles.btSave} onClick={salvarTrilha}>
					Salvar Trilha
				</button>
			</div>
		</div>
	);
};

export default CriarTri;
