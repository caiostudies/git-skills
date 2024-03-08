
import styles from "./TurmaCri.module.css";
import Navbar from "../../../components/navbar/Navbar";
import Input from "../../../components/input/Input";
import { useState } from "react";
import { storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


function Ap() {
    const [imgURL, setImgURL] = useState("")
    const [progress, setProgress] = useState(0)

    const handleUpload = (event) => {
        event.preventDefault()

        const file = event.target[0]?.files[0]
        if(!file) return;

        const storageRef = ref(storage, `images/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred/ snapshot.totalBytes) * 100
                setProgress(progress)
            },
            error => {
                alert(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url => {
                    setImgURL(url)
                })
            }
        )
    }

    // const [imageUpload, set]
    // const uploadImage = () => {}


    return (

        <div className={styles.container}>
            <Navbar />

            <div className={styles.addFoto}>
                <button className={styles.bt}></button>
                <div className={styles.inp}>
                    <Input
                        placeholder=""
                        id="nameTeam"
                        label="Nome da Trilha"
                    />
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.THeader}></div>
                <div className={styles.TBody}></div>
            </div>

            <form action="">
                <input type="file" />
                <button>Enviar</button>
            </form>
        <br />
        {!imgURL && <progress value={progress} max="100"/>}
        {imgURL && <img src={imgURL} alt="Imagem" />}

        </div>

    );
};


export default Ap