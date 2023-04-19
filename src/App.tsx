import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './screens/Home';
import { Resources } from './screens/Rescources';
import { Legal } from './screens/Legel';
import { Ide } from './screens/resources/Ide';

function App() {
  return (
    <div className="App">
      <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-2xl shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 ml-4 mr-4 mt-4 rounded-md">
        <h1 className='font-bold text-left text-white ml-4 mb-4 mt-4'>How2LearnCodeOnline</h1>
        <nav className='bg-opacity-60 flex items-center shadow-sm flex justify-center bg-white h-14  rounded-md'>
          <NavLink className='mr-3' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/">Accueil</NavLink><br />
          <NavLink className="mr-3" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/resources">Resources</NavLink> <br />
          <NavLink className="mr-3" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/material">Materiel requis</NavLink> <br />
          <NavLink className="mr-3" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/languages">Les languages adaptées</NavLink> <br />
          <NavLink className="mr-3" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/forum">Forum</NavLink> <br />
          <NavLink className="mr-3" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/tutorials">Les Tutoriels</NavLink> <br />
          <NavLink className="mr-3" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to="/legal">Mentions légales</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/resources/ide' element={<Ide />} />
      </Routes>
      <footer>
        <p className="text-center text-black text-xs pt-8 text-base font-semibold leading-7 
drop-shadow-xl">
          &copy;2023 Chifou. All rights reserved.
        </p>
      </footer>


    </div >


  );

}

export default App;
