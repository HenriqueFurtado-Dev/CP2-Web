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
                <h1 className="mb-8 text-red-400">API de usuários</h1>
                <table>
                    <thead>
                        <tr className="bg-red-900 m-3">
                            <th className="p-5 bg-red-200">ID</th>
                            <th>Nome</th>
                            <th>Usuário</th>
                            <th>Email</th>
                            <th>Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => (
                            <tr className="text-orange-800 p-3" key={usuario.id}>
                                <td className="p-5 bg-red-200">{usuario.id}</td>
                                <td className="p-5 bg-green-200">{usuario.name}</td>
                                <td className="p-5 bg-green-200">{usuario.username}</td>
                                <td className="p-5 bg-green-200">{usuario.email}</td>
                                <td className="p-5 bg-green-200">{usuario.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Usuarios; 