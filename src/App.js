import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilmList from './componen/FilmList';
import FilmDetail from './componen/FilmDetail'; // Nous allons créer ce composant
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/film/:id" element={<FilmDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
