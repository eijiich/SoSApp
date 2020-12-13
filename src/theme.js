import { createMuiTheme } from '@material-ui/core/styles';
import { blue, purple, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      //contrastText: '#555555',
      //light: '#0000FF',
      main: '#008CBA',
      //dark: '#00FF00',
    },
    secondary: {
      //contrastText: '#999999',
      //light: '#00FFFF',
      main: '#E3174B',
      //dark: '#FF00FF',
    },
  },
  status: {
    danger: 'orange',
  }
});

export default theme