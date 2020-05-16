import React from 'react';
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Tic Tac Toe</h2>
        <h3>React edition</h3>
      </header>
      <main className="App-body">
        <Game />
      </main>
      <footer className="App-footer">
        <p>Created for practice with guidance 
          from <a href="https://reactjs.org/tutorial/tutorial.html">Reactjs tutorial</a> by <a href="https://carlosealford.com">Carlos E Alford</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
