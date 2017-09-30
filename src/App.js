import React, { Component } from 'react';
import './App.css';
import Todos from "./components/main";
class App extends Component {
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default App;