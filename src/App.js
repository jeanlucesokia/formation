import { useEffect, useState } from 'react'
import { Button, TextField, Box } from '@mui/material'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [data, setData] = useState([])
  const change = () => {
    setData([...data, name])
  }
  useEffect(()=> {
    setData(data)
  }, [data])
  const reset = () => {
    setData([])
    setName('')
  }
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
          label="Enter text"
          defaultValue={name}
          onChange={(text) => setName(text.target.value)}
          onKeyPress={(e) => {
            if(e.key=='Enter'){
              if(name.length >= 2) return change()
              return false;
            }
          }}
          size='small'
        />
        <Button 
          disabled={name.length < 3 ? true : false}
          onClick={() => change()}
          variant="contained" 
          color="success"
          >change text</Button>
        <Button 
          variant="outlined" 
          color="error"
          onClick={() => reset()}
          >
          initilize
        </Button>
      </Box>
      {
        data.length != 0 ? data.map(x=><h1 key={Math.random()*101}>name: {x}</h1>):''
      }
    </div>
  );
}

export default App;
