import React from 'react';
import Posts from './components/Posts/Posts.container';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Redux Saga News Feed
      </header>
      <Posts />
    </div>
  );
}

export default App;
