import {useState} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true)
  return (
    <div className={`box ${isMorning ? 'dayLight' : 'box'}`}>
      <h1>Counter App, Good {isMorning ? "Morning" : "Night"}</h1>
      <button onClick={() => { setMorning(!isMorning) }}>Change {isMorning ? "Night" : "Day"}</button>
      <hr />
      <h2>Counter : {count}</h2>
      <button onClick={() => { setCount(++count) }}>Increase</button>
      <button onClick={() => { count === 0 ? setCount(count) : setCount(--count) }}>Decrease</button>
      <button onClick={() => { setCount(count = 0) }}>Reset</button>
    </div>
  );
}

export default App;
