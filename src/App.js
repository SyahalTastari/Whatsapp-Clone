import React, {useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Login from './Login';
import Chat from './Chat'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  

  

  return (
    // BEM naming convention
    <div className="App">
      {!user ? (
        <Login/>
      ): (
      <div className='app__body'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/rooms/:roomId" element={<Chat />} />
          {/* <Route  path="/">
          <Chat/>
          <Route/> */}
        </Routes>
      </Router>
      </div>
    )}
    </div>
  );
}

export default App;
