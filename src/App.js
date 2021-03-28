import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import NumberProvider from './components/number_provider';

function App() {

  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
