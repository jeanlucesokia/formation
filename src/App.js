import { useState } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [data, setData] = useState([])
  const change = () => {
    setData([...data, name])
  }
  const reset = () => {
    setData([])
    setName('')
  }
  return (
    <div className="App">
      <div>
        <input
          onChange={(text) => setName(text.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && change()}
          value={name}
        />
        <button onClick={() => change()}>change text</button>
        <button onClick={() => reset()}>initilize</button>
      </div>
      {
        data.map(x=><h1>name: {x}</h1>)
      }
    </div>
  );
}

export default App;
