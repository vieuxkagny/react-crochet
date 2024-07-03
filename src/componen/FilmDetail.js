import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import './FilmDetail.css';

const FilmDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { film } = location.state;

  return (
    <div className="film-detail">
      <h2>{film.title}</h2>
      <img src={film.imgSrc} alt={film.title} className="film-img-detail" />
      <p>{film.description}</p>
      <p>Note: {film.rating}</p>
      <div className="trailer">
        <iframe
          width="100%"
          height="400"
          src={film.trailerLink}
          title={`${film.title} Trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/" className="back-home">
        Revenir à la page d'accueil
      </Link>
    </div>
  );
};

export default FilmDetail;
