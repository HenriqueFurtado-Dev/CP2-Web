import React, { useEffect, useState } from "react";

interface Fotos {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Fotos: React.FC = () => {

    const [fotos, setFotos] = useState([]);

    try {
        useEffect(() => {
        const buscarFotos = async () => {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
            
            const dadosFotos = await resposta.json();

            setFotos(dadosFotos);
        };
        
        buscarFotos();
        }, []);  
    } catch (e) {
        console.log("Erro ao realizar a conexão com a API JSOn placeholder")
    }

    return (
        <main>
             <div className="user-response">
                <h1>API de Fotos</h1>
                <ul>
                    {fotos.map(foto =>(
                        <li className="usuario" key={foto.title}>
                            <img className="photo-user w-28 rounded-2xl" src={foto.url} alt="" />
                            {foto.title}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Fotos; 