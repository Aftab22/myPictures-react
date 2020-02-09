import React from 'react';
import Navbar from "./components/navbar/Navbar";
import './App.scss';
import PhotoList from './components/PhotoList/PhotoList';

function App() {
  return (<div>
       <Navbar />
       <PhotoList />
  </div>

  );
}

export default App;
