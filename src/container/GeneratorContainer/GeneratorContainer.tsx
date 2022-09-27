import { useState } from 'react'

import { Button, FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'

import { useAuth } from 'context/AuthContext'

const GeneratorContainer = () => {
  const [input, setInput] = useState<string | null>(null)
  const { onSignOut } = useAuth()

  console.log(input)

  return (
    <Box>
      <Button variant="contained" onClick={() => onSignOut()}>
        Sign Out
      </Button>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Write some keyword"
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained">Generate a post!</Button>
      </FormControl>
      <Box>Input</Box>
    </Box>
  )
}

export default GeneratorContainer
