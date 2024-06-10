import { createTheme } from '@mui/material';

const theme = createTheme({
    palette:{
      primary: {
        main: '#5acccc',
        light: '#cffafa',
        dark: '#28b8b8',
      },
      secondary: {
        main: '#f76434',
        light:'#ffe6dc',
        dark:'#4aa088',
      },
      common:{
        white:'#ffffff',
        black:'#000000',
      },
    },
    typography: {
      fontFamily: 'Mulish',
      h1:{
        fontSize: '3rem',
        fontWeight: 600,
      },
      h2:{
        fontSize: '1.75rem',
        fontWeight: 600,
      },
      h3:{
        fontSize: '1.5rem',
        fontWeight: 600,
      },
    },
});

export default theme;

  