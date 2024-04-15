import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './componentes/Home';
import Fotos from './componentes/Fotos';
import Usuarios from './componentes/Usuarios';
import Posts from './componentes/Posts';

function App() {
 return (
    <Router>
      <header>
        <nav>
          <ul className="flex justify-center space-x-4 p-3">
            <li><Link to='/' className="hover:text-blue-500">Home</Link></li>
            <li><Link to='/usuarios' className="hover:text-blue-500">Usuarios</Link></li>
            <li><Link to='/fotos' className="hover:text-blue-500">Fotos</Link></li>
            <li><Link to='/posts' className="hover:text-blue-500">Posts</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <footer className='p-10'>
        <p>Carlos Henrique Furtado - RM: 553597 | 1TDSZ <br /> <a target='_blank' href="https://github.com/HenriqueFurtado-Dev/CP2-Web"> Link para o Github </a></p>
      </footer>
    </Router>
 );
}

export default App;
