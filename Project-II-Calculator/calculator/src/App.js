import React from 'react';
import './App.scss';

import Numbers from './components/ButtonComponents/NumberButton'
import Action from './components/ButtonComponents/ActionButton'
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className="app">
        <div>
          <CalculatorDisplay text="0" />
        </div>

        <div className="buttons-all">
          <Numbers />
          <Action />
        </div>
    </div>
  );
};

export default App;
