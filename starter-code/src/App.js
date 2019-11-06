import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodList from './components/FoodList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <main>
          <FoodList />
        </main>
      </div>
    );
  }
}

export default App;
