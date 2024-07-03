import React from 'react';
import { Link } from 'react-router-dom';
import './FilmCard.css';

const FilmCard = ({ film, index }) => {
  return (
    <div className="film-card">
      <img src={film.imgSrc} alt={film.title} className="film-img" />
      <div className="film-details">
        <h2>{film.title}</h2>
        <p>{film.description}</p>
        <p>Note: {film.rating}</p>
        <Link to={`/film/${index}`} state={{ film }} className="view-details">
          Voir les détails
        </Link>
      </div>
    </div>
  );
};

export default FilmCard;
