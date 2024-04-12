import React, { useEffect, useState } from "react";

// Define o tipo de dado que esta sendo coletado da API
interface Usuarios {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

const Usuarios: React.FC = () => {

    // Define o use state 
    const [usuarios, setUsuarios] = useState([]);

    try {
        useEffect(() => {
        const buscarUsuarios = async () => {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
            
            const dadosUsuarios = await resposta.json();

            setUsuarios(dadosUsuarios);
        };
        
        buscarUsuarios();
        }, []);  
    } catch (e) {
        console.log("Erro ao realizar a conexão com a API JSOn placeholder")
    }

    return (
        <main>
            <div className="user-response">
                <h1>API de usuários</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Usuário</th>
                            <th>Email</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.id}</td>
                                <td>{usuario.name}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Usuarios; 