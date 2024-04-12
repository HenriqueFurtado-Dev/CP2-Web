import React, { useEffect, useState } from "react";
import './UserFetcher.css'

function UserFetcher() {

    // Define as variaveis
    const [usuarios, setUsuarios] = useState([]);

    // Utiliza o trycatch para tratar erros
    try {
        // Inicia o useEffect
        useEffect(() => {
        const buscarUsuarios = async () => {
            // faz a request para a URL
            const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
            
            // Converte os valores para JSON
            const dadosUsuarios = await resposta.json();

            // Seta a variavel com os valores JSON
            setUsuarios(dadosUsuarios);
        };
        
        buscarUsuarios();
        }, []);  
    } catch (e) {
        console.log('Error')
    }
 
    return(
        <>
            <div className="user-response">
                <h1>API de usuários</h1>
                <p>fonte utilizada: <a href="https://jsonplaceholder.typicode.com/photos" target="_blank">https://jsonplaceholder.typicode.com/users </a> </p>
                <h1>LISTA DE USUARIOS </h1>
                <ul>
                    {/* Percorre a lista de usuarios para exibir as informacoes*/}
                    {usuarios.map(usuario =>(
                        <li className="usuario" key={usuario.title}>
                            {/* Passa o valor da URL da imagem do Json para o SRC da imagem */}
                            <img className="photo-user" src={usuario.url} alt="" />
                            {usuario.title}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default UserFetcher;