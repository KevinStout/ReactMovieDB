import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Overdrive id={movie.id} duration="800">
      <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Overdrive>
  </Link>
);

export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
  max-height: 231px;
`;

// <div>
// <h3>{movie.title}: {movie.vote_average} out of 10</h3>
// <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
// <p>{movie.overview}</p>
// <hr />
// </div>
