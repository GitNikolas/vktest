import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './App.css';
import CatsInfo from './components/CatsInfo/CatsInfo';
import UserAge from './components/UserAge/UserAge';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className='content'>
        <CatsInfo></CatsInfo>
        <UserAge></UserAge>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
