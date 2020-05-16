import React from 'react';
import './App.css';
import Cw2 from './components/cw2';

const App = ({name}) => {
  return (
    <div>
      <Cw2 date={new Date()}/>
    </div>
  );
}

export default App;
