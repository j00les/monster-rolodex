import "./App.css";
import { useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// ---- using functional component
const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState("");
  console.log(searchField);
  const onSearchChange = e => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monster"
        onChangeHandler={onSearchChange}
        className="monsters-search-box"
      />
      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  );
};

//---- using class component
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(users => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }

//   //search method
//   onSearchChange = e => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter(monster =>
//       monster.name.toLocaleLowerCase().includes(searchField)
//     );
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           placeholder="Search monster"
//           onChangeHandler={onSearchChange}
//           className="monsters-search-box"
//         ></SearchBox>
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
