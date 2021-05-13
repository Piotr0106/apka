import React from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import Movie from './components/Movie';

class App extends React.Component {
  state = { movies: [] };

  onSearchSubmit = (term) => {
    axios
      .get( 'http://www.omdbapi.com/?apikey=dfe6d885', {
        headers: {
        },
        params: {
          query: term,
        },

      })
      
      .then((result) => {
        this.setState( this.state.movies.map(movie => <Movie key={movie.Title} Title={movie.Title} Poster={movie.Poster} Year={movie.Year} /> ));
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <header>
          <h1>Wyszukiwarka filmów</h1>
        </header>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <Movie movies={this.state.movies} />
      </div>
    );
  }
}


export default App;
