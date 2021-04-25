import { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/CardList/CardList.jsx';
import Search from './components/Search/Search.jsx';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setMonsters(data))
  })

  const searchMonsters = (e) => {
    const { value } = e.target;

    setSearch(value);
  }

  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <Search
        placeholder="Search monsters..."
        filter={searchMonsters}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
