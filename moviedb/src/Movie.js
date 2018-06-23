import React from 'react';
import PropTypes from 'prop-types';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
  </div>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

// <div>
// <h3>{movie.title}: {movie.vote_average} out of 10</h3>
// <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
// <p>{movie.overview}</p>
// <hr />
// </div>
