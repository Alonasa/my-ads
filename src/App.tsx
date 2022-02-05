import React from 'react';
import './App.css';
import {Footer} from './components/Footer/Footer';
import {dialogData, StateType} from './Redux/state';
import {Route, Routes} from 'react-router-dom';
import {Main} from './components/Pages/Main';
import {Profile} from './components/Pages/Profile/Profile';
import {Error404} from './components/Error404';
import {Dialogs} from './components/Pages/Messages/Dialogs/Dialogs';


function App(props: StateType) {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path={props.state.PATH.PROFILE} element={<Profile/>}/>
          <Route path={props.state.PATH.ERROR_404}
                 element={<Error404/>}/>
          <Route path={props.state.PATH.MESSAGES} element={<Dialogs data={dialogData}/>}/>
          {dialogData.map(d => {
            return <Route path={`${props.state.PATH.MESSAGES}${props.state.PATH.DIALOGS}${d.id}`}
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
