import React, { useEffect, useState } from "react";

// Define o tipo de dado que esta sendo coletado da API
interface Posts {
    id: number;
    title: string;
    body: string
}

const Posts: React.FC = () => {

    // Define o use state 
    const [posts, setPosts] = useState([]);

    try {
        useEffect(() => {
        const buscarPosts = async () => {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
            
            const dadosPosts = await resposta.json();

            setPosts(dadosPosts);
        };
        
        buscarPosts();
        }, []);  
    } catch (e) {
        console.log("Erro ao realizar a conexão com a API JSOn placeholder")
    }

    return (
        <main>
            <div className="user-response">
                <h1>API de Posts</h1>
                <ul className="flex flex-wrap w-full">
                    {posts.map(post =>(
                        <li className="post flex-grow w-1/3 bg-red p-4">
                            <h2 text-red>{post.id}</h2>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Posts; 