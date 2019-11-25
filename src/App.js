import React from 'react';
import logo from './logo.svg';
import StudentCard from './StudentCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <StudentCard name="Phran" session="9" />
      <StudentCard name="Liz" session="9" />
      <StudentCard name="Paul" session="9" />
    </div>
  );
}


export default App;
