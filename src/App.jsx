import React, { Component } from 'react';
import './App.css';

import CardList from './components/CardList/CardList.jsx';
import Search from './components/Search/Search.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: ''
    }

    this.searchMonsters = this.searchMonsters.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({
        monsters: data
      }))
  }

  searchMonsters(e) {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value
    })
  }

  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
      <div className="App">
        <Search
          placeholder="Search monsters..."
          filter={this.searchMonsters}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
