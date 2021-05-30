import logo from './logo.svg';
import './App.css';
import React from 'react';
import List from './List';

class App extends React.PureComponent {
  render() {
  return (
    <div className="App">
      <List />
    </div>
  );
  }
}

export default App;
