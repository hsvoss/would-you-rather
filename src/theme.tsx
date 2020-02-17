import {createMuiTheme} from '@material-ui/core/styles';
import {blue, pink} from '@material-ui/core/colors';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
    },
});

export default theme;
