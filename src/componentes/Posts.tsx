import React, { useEffect, useState } from "react";

// Utilizando a Interface para definir o tipo(String, number, objeto) de cada propriedade que será utilizada 
interface Posts {
    id: number;
    title: string;
    body: string
}

const Posts: React.FC = () => {

    // Criando o UseState = Uma variavel, e um "controlador" para alterar o estado da variavel criada    
    const [posts, setPosts] = useState([]);

    // Utiliza o try + fetch para chamar os dados da API e salvar dentro de uma variavel para ser utilizada depois
    try {
        useEffect(() => {
        const buscarPosts = async () => {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
            // Converte a resposta para formato JSON para que possa ser manipulada
            const dadosPosts = await resposta.json();
            // Utiliza o UseState para alterar o estado da variavel
            setPosts(dadosPosts);
        };
        
        // Chama a funcao que vai executar a API
        buscarPosts();
        }, []);  
    // Caso aconteça um erro coleta exibe uma menasgem no console
    } catch (e) {
        console.log("Erro ao realizar a conexão com a API JSOn placeholder")
    }

    return (
        <main>
            <div className="user-response">
                <h1 className="mt-5 mb-20  font-bold text-6xl text-orange-600">API de Posts</h1>
                <ul className="flex flex-wrap w-full justify-center">
                    {/* Utiliza um Map para percorrer toda a variavel Posts com o JSON e exibir o resultado com HTML nesse caso em formato de lista*/}
                    {posts.map(post =>(
                        // Utilizando tailwind para fazer a responsividade
                        <li className="post flex-grow sm:w-1/2 md:w-1/3 lg:w-1/4 bg-blue-950 p-8 bg-blue-400 m-2 rounded-lg">
                            <h2 className="text-2xl font-bold" text-red>{post.id}</h2>
                            <p className="text-orange-600 text-2xl font-bold mt-2 mb-7">{post.title}</p>
                            <p className="">{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Posts; 