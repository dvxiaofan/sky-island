import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const a = '123';
  if (a === '123') {
    console.log('hhh');

  }
  return (
    <div className="App">
      <header className="App-header">
        <Button></Button>
      </header>
    </div>
  );
}

export default App;
