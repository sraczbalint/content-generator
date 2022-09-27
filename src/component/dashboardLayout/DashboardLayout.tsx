import { FunctionComponent, PropsWithChildren } from 'react'

import { Box, Button, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

import { useAuth } from 'context/AuthContext'

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}))

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const DashboardLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
}) => {
  const { onSignOut } = useAuth()

  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          margin: '-10px -10px 15px -10px',
          padding: '10px 15px',
        }}
        elevation={2}
      >
        <Button
          variant="outlined"
          sx={{ marginLeft: 'auto' }}
          onClick={() => onSignOut()}
        >
          Sign Out
        </Button>
      </Paper>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
    </>
  )
}

export default DashboardLayout
