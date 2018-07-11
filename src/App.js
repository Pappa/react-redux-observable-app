import React, { Component } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search />
          </header>
        <Results />
      </div>
    );
  }
}

export default App;
