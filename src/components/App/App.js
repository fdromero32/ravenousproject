import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from '../Business List/BusinessList'
import SearchBar from '../Search Bar/SearchBar'

var business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Lucas pizza',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [business, business, business, business, business, business]

class App extends Component {
  render() {
  return (
      <div class="App">
          <h1>ravenous</h1>
          <SearchBar />
          <BusinessList businesses={businesses}/> 
      </div>
   )
  }
}
export default App;
