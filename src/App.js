import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchState: "",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  }

  onSearchChange(e) {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search"
          onChange={onSearchChange}
        />
        {filteredMonsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
