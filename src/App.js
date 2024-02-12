import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Banner from './Banner/Banner';
import RowPost from './RowPost/RowPost';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
  }

export default App;
