import React, { useState } from 'react'

import {
  Button,
  CircularProgress,
  FormControl,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { AxiosResponse } from 'axios'

import { axiosPostCompletion } from '../../component/api'
import styles from './GeneratorContainer.module.scss'

const GeneratorContainer = () => {
  const [prompt, setPrompt] = useState<string | null>(null)
  const [isLoading, setIslLoading] = useState<boolean>(false)
  const [result, setResult] = useState<string | undefined>()

  const handleClick = async (e: React.MouseEvent<Element, MouseEvent>) => {
    setIslLoading(true)
    e.preventDefault()

    try {
      await axiosPostCompletion(prompt).then((response: AxiosResponse) =>
        setResult(response.data.result),
      )
    } catch (err) {
      console.error(err)
    }
    setIslLoading(false)
  }

  return (
    <Box className={styles.root}>
      <FormControl>
        <TextField
          label="Write some keyword"
          variant="outlined"
          size="medium"
          margin="normal"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleClick(e)}
        >
          {isLoading ? (
            <CircularProgress size={25} sx={{ color: 'white' }} />
          ) : (
            'Generate a post!'
          )}
        </Button>
      </FormControl>
      <Typography marginTop={'20px'} fontSize={'medium'}>
        Response from GPT-3 engine:
      </Typography>
      <Paper elevation={2} sx={{ minHeight: '200px', padding: '10px' }}>
        {result}
      </Paper>
    </Box>
  )
}

export default GeneratorContainer
