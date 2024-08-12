import { Provider } from 'react-redux';
import { store } from '@store/store';
import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import AppLayout from '@components/Layouts/AppLayout';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Outlet />
        </AppLayout>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
