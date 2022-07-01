import { useEffect, useState, useRef } from 'react';
import { Button, TextField, Box } from '@mui/material';
import Videos from './videos/Videos.mp4';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);
  const [timer, setTimer] = useState(1);
  const refVideo = useRef();
  const change = () => {
    setData([...data, name]);
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  useEffect(() => {
    setData(data);
    setTimeout(() => {
      refVideo.current.pause();
    }, 1500);
  }, [data]);

  const reset = () => {
    setData([]);
    setName('');
  };
  return (
    <div className="App">
      <Box
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-controlled"
          size="small"
          value={timer}
        />
        <TextField
          required
          id="outlined-controlled"
          label="Enter text"
          onChange={(text) => setName(text.target.value)}
          onKeyPress={(e) => {
            if (e.key == 'Enter') {
              if (name.length >= 2) return change();
              return false;
            }
          }}
          size="small"
          value={name}
        />
        <Button
          disabled={name.length < 3 ? true : false}
          onClick={() => change()}
          variant="contained"
          color="success"
        >
          change text
        </Button>
        <Button variant="outlined" color="error" onClick={() => reset()}>
          initilize
        </Button>
      </Box>
      <div>
        {data.length != 0 &&
          data.map((x) => <h1 key={Math.random() * 101}>name: {x}</h1>)}
      </div>
      <div>
        <video ref={refVideo} width="750" height="500" autoPlay controls muted>
          <source src={Videos} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
