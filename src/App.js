import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      dinos: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ dinos: users }));
  }

  render() {
    const { dinos, searchField } = this.state;
    const filteredDino = dinos.filter((dino) =>
      dino.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox 
          placeholder='Search Robots'
          search={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList dinos={filteredDino} />
      </div>
    );
  }
}

export default App;
