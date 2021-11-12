import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);

    this.state = {
      inquiry: '',
    };
  }

  search() {
    this.props.onSearch(this.state.inquiry);
    console.log(this.state.inquiry);
  }

  handleTermChange(e) {
    this.setState({ inquiry: e.target.value });
  }

  render() {
    return (
      <div className='SearchBar'>
        <input
          placeholder='Enter A Song, Album, or Artist'
          onChange={this.handleTermChange}
        />
        <button className='SearchButton' onClick={this.search}>
          SEARCH
        </button>
      </div>
    );
  }
}
