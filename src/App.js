import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchState: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = e => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render");
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonster = this.state.monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(this.state.searchField)
    );
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search"
          onChange={this.onSearchChange}
        />
        {filteredMonster.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
