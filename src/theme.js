import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      //contrastText: '#555555',
      //light: '#0000FF',
      main: '#5555FF',
      //dark: '#00FF00',
    },
    secondary: {
      contrastText: '#999999',
      light: '#00FFFF',
      main: '#FFFF00',
      dark: '#FF00FF',
    },
  },
  status: {
    danger: 'orange',
  },
});

export default theme