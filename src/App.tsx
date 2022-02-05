import React from 'react';
import './App.css';
import {Footer} from './components/Footer/Footer';
import {StateType} from './Redux/state';
import {Route, Routes} from 'react-router-dom';
import {Main} from './components/Pages/MainPage/Main';
import {Profile} from './components/Pages/Profile/Profile';
import {Error404} from './components/Error404';
import {Dialogs} from './components/Pages/Messages/Dialogs/Dialogs';

function App(props: StateType) {
  const {PATH,dialogData,items} = props.state;
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Main items={items}/>}/>
          <Route path={PATH.PROFILE} element={<Profile/>}/>
          <Route path={PATH.ERROR_404}
                 element={<Error404/>}/>
          <Route path={PATH.MESSAGES}
                 element={<Dialogs data={dialogData}/>}/>
          {dialogData.map(d => {
            return <Route
              path={`${PATH.MESSAGES}${PATH.DIALOGS}${d.id}`}
              element={<Dialogs data={dialogData}/>}/>
          })}
          <Route path="*" element={<Error404/>}/>

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
