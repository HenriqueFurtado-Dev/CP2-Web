import React, { useEffect, useState } from "react";

// Utilizando a Interface para definir o tipo(String, number, objeto) de cada propriedade que será utilizada 
interface Fotos {
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const Fotos: React.FC = () => {

    // Criando o UseState = Uma variavel, e um "controlador" para alterar o estado da variavel criada    
    const [fotos, setFotos] = useState([]);

    // Utiliza o try + fetch para chamar os dados da API e salvar dentro de uma variavel para ser utilizada depois
    try {
        useEffect(() => {
        const buscarFotos = async () => {
            const resposta = await fetch('https://jsonplaceholder.typicode.com/photos');
            // Converte a resposta para formato JSON para que possa ser manipulada
            const dadosFotos = await resposta.json();
            // Utiliza o UseState para alterar o estado da variavel
            setFotos(dadosFotos);
        };
        
        // Chama a funcao que vai executar a API
        buscarFotos();
        }, []);  
    // Caso aconteça um erro coleta exibe uma menasgem no console
    } catch (e) {
        console.log("Erro ao realizar a conexão com a API JSOn placeholder")
    }

    return (
        <main>
             <div className="user-response">
                <h1 className="font-bold mt-5 mb-20 text-6xl text-orange-600">API de Fotos</h1>
                <ul>
                    {/* Utiliza um Map para percorrer toda a variavel Posts com o JSON e exibir o resultado com HTML nesse caso em formato de lista*/}
                    {fotos.map(foto =>(
                        <li className="usuario bg-blue-950 p-5 m-10 rounded-2xl flex flex-col items-center justify-center gap-4" key={foto.title}>
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