import React from 'react';
import './App.css';
import {AppBarMenu} from './components/AppBarMenu';
import {MainContent} from './components/MainContent';

function App() {
  return (
    <div className="App">
      <AppBarMenu/>
      <MainContent/>
    </div>
  );
}

export default App;
