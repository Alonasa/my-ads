import React from 'react';
import './App.css';
import {AppBarMenu} from './components/AppBarMenu';
import {MainContent} from './components/MainContent';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      <AppBarMenu/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
