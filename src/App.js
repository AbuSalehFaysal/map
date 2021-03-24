import logo from './logo.svg';
import './App.css';
import Map from './Components/Map';
import Direction from './Components/Direction';
import { useState } from 'react';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <div className="App">
      <input type="text" name="" id="" placeholder="Starting From" onBlur={e  =>  setOrigin(e.target.value)} />
      <input type="text" name="" id="" placeholder="Going To" onBlur={e  =>  setDestination(e.target.value)} />
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
