import { useState } from "react";
import UserCard from "./UserCard";
import "../pages/UserGrid.css";

const uploadFileURL = import.meta.env.VITE_API;

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [uploadRes, setUploadRes] = useState([]);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const isCSV = (file) => {
        return file.name.endsWith(".csv");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setMessage("Nenhum arquivo selecionado.");
            return;
        }

        if (!isCSV(file)) {
            setMessage("Por favor, selecione um arquivo CSV.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch(uploadFileURL, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                setMessage(`Erro ao enviar o arquivo: ${errorData.error}`);
                return;
            }

            const data = await response.json();
            if (data.error) {
                setMessage(`Arquivo não compatível: ${data.error}`);
            } else if (data.data) {
                setUploadRes(data.data);
            }
        } catch (error) {
            console.error("Erro ao enviar o arquivo:", error);
        }
    };

    return (
        <div className="container">
            <div className="divform">
                <form className="form" onSubmit={handleSubmit}>
                    <input type="file" style={{ fontSize: "1.3rem" }} onChange={handleFileChange} />
                    <button type="submit">Enviar Arquivo</button>
                </form>
            </div>
            <div className="user-container">
                {uploadRes.length === 0 && <p style={{ textAlign: "center", alignItems: "center", width: "100%" }}>{message}</p>}
                {uploadRes.length > 0 &&
                    uploadRes.map((user) => <UserCard key={user.id} user={user} />)}
            </div>
        </div>
    );
};

export default FileUpload;
