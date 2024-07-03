import React, { Component } from 'react';
import FilmCard from './FilmCard';
import './FilmList.css';

class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [
        { 
          title: 'Inception', 
          description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
          rating: 8.8, 
          imgSrc: './inception.png',
          trailerLink: 'https://www.youtube.com/embed/8hP9D6kZseM'
        },
        { 
          title: 'Interstellar', 
          description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
          rating: 8.6, 
          imgSrc: './interstellar.png',
          trailerLink: 'https://www.youtube.com/embed/zSWdZVtXT7E'
        },
        { 
          title: 'The Dark Knight', 
          description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
          rating: 9.0, 
          imgSrc: './dark.png',
          trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY'
        },
        // Ajoutez plus de films ici
      ],
      filterTitle: '',
      filterRating: '',
      newFilm: {
        title: '',
        description: '',
        rating: '',
        imgSrc: '',
        trailerLink: ''
      }
    };
  }

  handleTitleChange = (event) => {
    this.setState({ filterTitle: event.target.value });
  };

  handleRatingChange = (event) => {
    this.setState({ filterRating: event.target.value });
  };

  handleNewFilmChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newFilm: {
        ...prevState.newFilm,
        [name]: value
      }
    }));
  };

  addNewFilm = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      films: [...prevState.films, prevState.newFilm],
      newFilm: { title: '', description: '', rating: '', imgSrc: '', trailerLink: '' }
    }));
  };

  getFilteredFilms() {
    const { films, filterTitle, filterRating } = this.state;
    return films.filter((film) => {
      const matchesTitle = film.title.toLowerCase().includes(filterTitle.toLowerCase());
      const matchesRating = filterRating === '' || film.rating >= parseFloat(filterRating);
      return matchesTitle && matchesRating;
    });
  }

  render() {
    const { newFilm } = this.state;
    const filteredFilms = this.getFilteredFilms();

    return (
      <div className="film-list">
        <div className="filters">
          <input
            type="text"
            placeholder="Filtrer par titre"
            value={this.state.filterTitle}
            onChange={this.handleTitleChange}
          />
          <input
            type="number"
            placeholder="Filtrer par note"
            value={this.state.filterRating}
            onChange={this.handleRatingChange}
          />
        </div>
        <form className="add-film-form" onSubmit={this.addNewFilm}>
          <input
            type="text"
            name="title"
            placeholder="Titre"
            value={newFilm.title}
            onChange={this.handleNewFilmChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newFilm.description}
            onChange={this.handleNewFilmChange}
          />
          <input
            type="text"
            name="imgSrc"
            placeholder="URL de l'affiche"
            value={newFilm.imgSrc}
            onChange={this.handleNewFilmChange}
          />
          <input
            type="number"
            name="rating"
            placeholder="Note"
            value={newFilm.rating}
            onChange={this.handleNewFilmChange}
          />
          <input
            type="text"
            name="trailerLink"
            placeholder="Lien de la bande-annonce"
            value={newFilm.trailerLink}
            onChange={this.handleNewFilmChange}
          />
          <button type="submit">Ajouter un film</button>
        </form>
        <div className="films">
          {filteredFilms.map((film, index) => (
            <FilmCard key={index} film={film} index={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default FilmList;
