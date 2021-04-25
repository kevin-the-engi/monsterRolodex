import React, { Component } from 'react';
import './App.css';

import CardList from './components/CardList/CardList.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({
        monsters: data
      }))
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
