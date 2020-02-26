import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../Business List/BusinessList'
import SearchBar from '../Search Bar/SearchBar'
import { render } from '@testing-library/react';

class App extends Component {
  render() {
  return (
      <div class="App">
          <h1>ravenous</h1>
          <SearchBar />
          <BusinessList /> 
      </div>
   )
  }
}
export default App;
