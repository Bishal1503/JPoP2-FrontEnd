import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Add_Book from './add-book';
import Display_Book from './display-book';

function App() {
  return (
   
    <div className="container">
         <Navbar/>
         <div className="jumbotron">
          <Add_Book/>
          </div>
          <div className="jumbotron">
          <Display_Book/>
         </div>
    </div>
  );
}

export default App;
