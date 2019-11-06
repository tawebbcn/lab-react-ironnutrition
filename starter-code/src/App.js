import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Food from './components/Food';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>IronNutrition</h1>
        </header>
        <main>
          <Food />
        </main>
      </div>
    );
  }
}

export default App;
