import { Button } from '@mui/material'
import React, { FC, memo } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export interface ButtonProps {
  text: string
  type: 'primary' | 'secondary'
  onClick?: () => void
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#484848',
      contrastText: '#FFFFFF',
    },
  },
})

export const CustomButton: FC<ButtonProps> = memo(({ text, type, onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={type === 'primary' ? 'contained' : 'outlined'}
        color={'primary'}
        onClick={onClick}
        disableElevation
      >
        {text}
      </Button>
    </ThemeProvider>
  )
})

CustomButton.displayName = 'CustomButton'
