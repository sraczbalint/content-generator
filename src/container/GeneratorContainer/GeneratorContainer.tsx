import { useState } from 'react'

import {
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'

import styles from './GeneratorContainer.module.scss'

const GeneratorContainer = () => {
  const [input, setInput] = useState<string | null>(null)

  console.log(input)

  return (
    <Box className={styles.root}>
      <FormControl>
        <TextField
          label="Write some keyword"
          variant="outlined"
          size="medium"
          margin="normal"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained">Generate a post!</Button>
      </FormControl>
      <Typography marginTop={'20px'} fontSize={'medium'}>
        Response from GPT-3 engine:
      </Typography>
      <Paper elevation={2} sx={{ minHeight: '200px', padding: '10px' }}>
        ...please write some input...
      </Paper>
    </Box>
  )
}

export default GeneratorContainer
