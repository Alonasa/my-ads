import React, {useState} from 'react';
import './App.css';
import {AppBarMenu} from './components/AppBarMenu';
import {MainContent} from './components/MainContent';
import {Footer} from './components/Footer/Footer';


function App() {
  const [AppData, setAppData] = useState([
    {
      link: '#',
      pages: ['Ads', 'Post Ad', 'Premium Listings'],
      isAuth: false,
      loggedInn: ['Profile', 'LogOut'],
      loggedOut: ['Login', 'Register']
    },
  ])
  
  const changeAuth = (auth: boolean) => {
    setAppData(AppData.map(f => f.isAuth === !auth ? {...f, isAuth: auth} : f));
  }
  
  return (
    <div className="App">
      <AppBarMenu data={AppData} changeAuth={changeAuth}/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
