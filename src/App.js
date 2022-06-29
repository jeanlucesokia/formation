import { useState } from 'react'
import { Button, TextField, Box } from '@mui/material'
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
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-controlled"
          label="Enter text"
          defaultValue={name}
          onChange={(text) => setName(text.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && change()}
          size='small'
        />
        <Button onClick={() => change()}
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
          data.map(x=><h1>name: {x}</h1>)
        }
    </div>
  );
}

export default App;
