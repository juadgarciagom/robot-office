import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      dinos: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response  => response.json())
    .then(users => this.setState({ dinos: users }))
  }

  render() {
    return (
      <div className="App">
      <CardList dinos ={this.state.dinos} />
        
      </div>
    );
  }

}

export default App;
