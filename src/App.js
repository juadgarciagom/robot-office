import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/search-box/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const { robots, searchField } = this.state;
    const filteredRobot = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Robot Office</h1>
        <SearchBox 
          placeholder='Search Robots'
          search={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList robots={filteredRobot} />
      </div>
    );
  }
}

export default App;
