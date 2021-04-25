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
    return (
      <div className="App">
        {this.state.monsters.map(monster =>
          <h1 key={monster.id}>
            {monster.name}
          </h1>)
        }
      </div>
    );
  }
}

export default App;
