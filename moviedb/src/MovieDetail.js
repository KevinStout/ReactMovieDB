import React, { Component } from 'react';
import CurrencyFormat from 'react-currency-format';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

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
      <div>
        <h1>{this.state.movie.title}</h1>
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.tagline}</h2>
        <h2>{this.state.movie.release_date}</h2>
        <p>{this.state.movie.overview}</p>
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
    );
  }
}

export default MovieDetail;
