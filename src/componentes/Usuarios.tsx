import React, { useEffect, useState } from "react";

// Define o tipo de dado que esta sendo coletado da API
interface Usuarios {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    adress: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    }
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
                <h1 className="mb-8 text-white font-bold">API de usuários</h1>
                <table>
                    <thead>
                        <tr className="bg-blue-600 m-3">
                            <th className="p-5 bg-blue-900">ID</th>
                            <th>Nome</th>
                            <th>Usuário</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Endereco</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => (
                            <tr className="text-white p-3" key={usuario.id}>
                                <td className="p-5 bg-blue-900 text-white">{usuario.id}</td>
                                <td className="p-5 bg-blue-300">{usuario.name}</td>
                                <td className="p-5 bg-blue-400">{usuario.username}</td>
                                <td className="p-5 bg-blue-300">{usuario.email}</td>
                                <td className="p-5 bg-blue-400">{usuario.phone}</td>
                                <td className="p-5 bg-blue-300">
                                    {usuario.address.street} - 
                                    {usuario.address.city}
                                    {usuario.address.suite}
                                    {usuario.address.zipcode}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Usuarios; 