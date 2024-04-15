import React, { useEffect, useState } from "react";

// Define o tipo de dado que esta sendo coletado da API
interface Usuarios {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    // Aqui estamos tipando o address como um objeto e definindo cada valor dentro dele
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    }
}

const Usuarios: React.FC = () => {

    // Define o use state 
    const [usuarios, setUsuarios] = useState([]);

    // Realizando o Try, e o fetch para chamar a API e converter dentro de uma variavel
    try {
        useEffect(() => {
        const buscarUsuarios = async () => {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
            const dadosUsuarios = await resposta.json();
            setUsuarios(dadosUsuarios);
        };
        
        // Chama a funcao 
        buscarUsuarios();
        }, []);  
    // Captura o Erro e exibe no console
    } catch (e) {
        console.log("Erro ao realizar a conexão com a API JSOn placeholder")
    }

    return (
        // Layout utilizando o tailwind
        <main class="mx-auto">
            <div className="user-response">
                <h1 className="mb-8 text-white font-bold">API de usuários</h1>
                <table className="max-w-screen-xl mx-auto">
                    <thead>
                        <tr className="bg-blue-600 m-3">
                            <th className="py-4 px-5 bg-blue-900">ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Endereco</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Utilizamos o MAP para percorrer os dados da API e criar um elemento para cada usuário */}
                        {usuarios.map(usuario => (
                            <tr className="text-white p-3" key={usuario.id}>
                                <td className="p-2 bg-blue-900 text-white">{usuario.id}</td>
                                <td className="p-2 bg-blue-300">{usuario.name}</td>
                                <td className="p-2 bg-blue-400">{usuario.email}</td>
                                <td className="p-2 bg-blue-300">
                                    {/* Como Address é um objeto, acessamos o item que esta dentro do objeto! */}
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