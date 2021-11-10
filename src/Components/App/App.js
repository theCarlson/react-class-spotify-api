import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: 1,
          name: 'Rick Rolls',
          artist: 'Rick and Roll',
          album: 'Rick Rolls Right',
        },
        {
          id: 2,
          name: 'Rick Rolls2',
          artist: 'Rick and Roll2',
          album: 'Rick Rolls Right2',
        },
        {
          id: 3,
          name: 'Rick Rolls3',
          artist: 'Rick and Roll3',
          album: 'Rick Rolls Right3',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}
