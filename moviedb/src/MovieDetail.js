import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=72aa4def65493ab3a68956fa3b0073fa&language=en-US`);
      const movie = await res.json();

      this.setState({
        movie,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}>
        <MovieInfo>
          <Link to="/" >
            <Overdrive id={movie.id} duration="800">
              <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
            </Overdrive>
          </Link>
          <div>
            <h1>{movie.title}</h1>
            <h2>{movie.release_date}</h2>
            <h2>{movie.tagline}</h2>
            <p>{movie.overview}</p>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Budget</th>
                  <th>Popularity</th>
                  <th>Vote Count</th>
                  <th>Average Vote</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{movie.id}</td>
                  <td><CurrencyFormat value={movie.budget} displayType="text" thousandSeparator prefix="$" /></td>
                  <td>{movie.popularity}</td>
                  <td>{movie.vote_count}</td>
                  <td>{movie.vote_average}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 70vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`;

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div{
        margin-left: 20px;
    }
    img{
        position: relative;
        top: -5rem;
    }
`;
