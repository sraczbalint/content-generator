import { Button, FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState<string | null>(null)

  console.log(input)

  return (
    <Box className="App">
      <FormControl>
        <TextField
          id="outlined-basic"
          defaultValue="Write some keyword"
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained">Contained</Button>
      </FormControl>
      <Box>Input</Box>
    </Box>
  )
}

export default App
