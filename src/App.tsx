import React from 'react';
import './App.css';
import {AppBarMenu} from './components/AppBarMenu';
import {MainContent} from './components/MainContent';
import {Footer} from './components/Footer/Footer';


const AppData = [
  {
    link: '#',
    pages: ['Ads', 'Post Ad', 'Premium Listings'],
    isAuth: true,
    loggedInn: ['Profile', 'Logout'],
    loggedOut: ['Login', 'Register']
  },
]

function App() {
  
  
  
  return (
    <div className="App">
      <AppBarMenu data={AppData}/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
