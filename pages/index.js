import * as React from 'react';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" gutterBottom color="primary" align="center">
        Hello Material UI
      </Typography>
    </ThemeProvider>
  );
}
