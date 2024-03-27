import React, { useState } from "react";
import styles from "./ChangeTri.module.css";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import LinkModal from "../modalLink/LinkModal";

import { HiOutlinePencilAlt } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";
import axios from "axios";
import api from "../../api";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../firebase";
import Input from "../input/Input";



const ChangeTri = () => {
	const [elements, setElements] = useState([]);
	const [novoTitulo, setNovoTitulo] = useState("");
	const [showLinkModal, setShowLinkModal] = useState(false);
	const [currentElementIndex, setCurrentElementIndex] = useState(null);
	const [currenttopicoIndex, setCurrenttopicoIndex] = useState(null);

	const [nome, setNome] = React.useState('');
	const [desc, setDesc] = React.useState('');
	const [focal_point, setFocal_point] = React.useState('');
	const [criador_trilha, setCriador_trilha] = React.useState('');
	const [carga_horaria, setCarga_horaria] = React.useState('');
	const [conteudo, setConteudo] = React.useState('');
	const [image_trail, setImage_trail] = React.useState('');
  
	const [id, setId] = useState(""); //Para o get


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


	// const cont = () => {
	// 	localStorage.getItem("trilha")
	// 	alert("Trilha salva com sucesso!");
	// }

	const trilhaStorage = window.localStorage.getItem("trilha")

	const cadastration = async (e) => {
		e.preventDefault();
		console.log("OI oi");

		const contJson = () => {
			localStorage.getItem("trilha")
			alert("Trilha salva com sucesso!");
		}
		
		
		const storageStr = JSON.stringify(trilhaStorage)
		console.log(storageStr)



		try {
			const Newtrail = await axios.post(
				`${api}/api/v1/trail/createTrail`,
				{
					nome: nome,
					desc: desc,
					// focal_point: focal_point,
					focal_point: "VAMO",
					// criador_trilha: criador_trilha,
					criador_trilha: 125,
					carga_horaria: carga_horaria,
					conteudo: storageStr,
					image_trail: image_trail,
					
				}
			);
			toast.success('Cadastro feito com sucesso', {
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

	const [imageUpload, setImageUpload] = useState(null);
	const [imageUrl, setImageUrl] = useState(null);

	const uploadFile = () => {
		if (imageUpload == null) return;
	
		const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
	
		uploadBytes(imageRef, imageUpload)
		  .then((snapshot) => getDownloadURL(snapshot.ref))
		  .then((url) => {
			// Set the latest image URL and clear the previous URLs
			setImageUrl(url);
			console.log(url)
		  })
		  .catch((error) => {
			console.log("Error uploading file: ", error);
		  });
	
	};
	
	const [Trail_id, setTrail_id] = useState(null);

	const changePhoto = async (e) => {
		e.preventDefault();
		console.log("changing");


		try {
			const Newphoto = await axios.put(
				`${api}/api/v1/trail/updateTrailPhoto/${Trail_id}`,
				{
					nome: "",
					Trail_id: Trail_id,
					// nome: Trail_id,
					image_trail: imageUrl,
					desc: "",
					focal_point: "",
					criador_trilha: 0,
					carga_horaria: 0,
					conteudo: "",
				}
			);
			toast.success('Foto adicionada com sucesso', {
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

	const [nomeChange, setNomeC] = useState("");
	const [descChange, setDescC] = useState("");
	const [focal_pointChange, setFocalC] = useState("");
	const [criador_trilhaChange, setCriadorC] = useState("");
  	const [carga_horariaChange, setHoraC] = useState("");
  	const [conteudoChange, setConteudoC] = useState("");
  	const [image_trailChange, setImageC] = useState("");

	  const changeTrail = async (e) => {
		e.preventDefault();
		console.log("changing");

		try {
			const Newphoto = await axios.put(
				`${api}/api/v1/trail/updateTrailInfo/${Trail_id}`,
				{
					Trail_id: Trail_id,
					nome: nome,
					image_trail: "",
					desc: desc,
					focal_point: focal_point,
					criador_trilha: 0,
					carga_horaria: carga_horaria,
					conteudo: conteudo,
				}
			);
			toast.success('Trilha alterada com sucesso', {
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
			{showLinkModal && (
				<LinkModal onClose={closeLinkModal} onSave={saveLink} />
			)}
			<div className={styles.contHeader}>
				<div className={styles.contImg}>
					<button className={styles.btImg}>
						<FiUpload size={75} />
						<h1>Enviar Image</h1>
					</button>
				</div>
				<div className={styles.bodyH}>
					<div className={styles.titleH}>
						<input
							className={styles.inpTitulo}
							placeholder="Adicionar Titulo"
							onChange={(e) => setNome(e.target.value)}
							value={nome}
						/>
					</div>
					<div className={styles.descH}>
						<textarea
							className={styles.desc}
							placeholder="Adicionar breve descrição da trilha"
							type="text"
							onChange={(e) => setDesc(e.target.value)}
							value={desc}
						/>
					</div>
					<div className={styles.infosH}>
						<h4>Carga Horaria:</h4>
						<input className={styles.ch} type="text" value={carga_horaria} onChange={(e) => setCarga_horaria(e.target.value)} />
					</div>
					<div className={styles.infosH}>
						<h4>Focal Point:</h4>
						<input className={styles.ch} type="text" value={focal_point} onChange={(e) => setFocal_point(e.target.value)} />
					</div>


					<div className={styles.infosH}> 
						<h4>ID da trilha:</h4>
						<input className={styles.ch} type="text" onChange={(e) => setTrail_id(e.target.value)} />
					</div>
				
					<button onClick={get_trail}>api</button>
					<Input
					label="ID"
					type="text"
					id="focal"
					placeholder=""
					value={id}
					onChange={(e) => setId(e.target.value)}
					/>
					

					<Input
					label="Trail ID"
					type="text"
					id="focal"
					placeholder=""
					onChange={(e) => setTrail_id(e.target.value)}
					/>
					<button onClick={changeTrail}>edit</button>
					
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
				<button className={styles.btSave} onClick={cadastration}>
					Salvar Trilha
				</button>

				<button className={styles.btSave} onClick={salvarTrilha}>
					Salvar storage
				</button>

				<button className={styles.btSave} onClick={changePhoto}>
					Mudar imagem
				</button>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={4000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>

			<div>
				<input
				type="file"
				onChange={(event) => {
					setImageUpload(event.target.files[0]);
				}}
				/>
			</div>


			<button onClick={uploadFile}>Mandar imagem</button>
			{imageUrl && <img src={imageUrl} alt="Uploaded" />}
		</div>
	);
};

export default ChangeTri;
