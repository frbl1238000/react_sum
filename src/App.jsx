import React from 'react';
import './App.scss';
import { Sum } from './components/Sum/Sum';

function App() {
  return (
    <div>
      <Sum a={2} b={3} />
      <Sum a={-5} b={5} />
      <Sum a={10} />
      <Sum b={5} />
      <Sum />
    </div>
  );
}

export default App;
