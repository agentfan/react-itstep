import React from 'react';
import './App.css';
import Hw3 from './components/hw3';

const App = () => {
  const [clubData, setClubData] = React.useState(fc);

  return (
      <hw3 clubData={clubData}/>
  );
}

export default App;
