import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import AuthContextProvider from './Contexts/AuthContextProvider';
import { router } from './Routers/Routes';
import { theme } from './Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <div className="App">
          <CssBaseline />
          <RouterProvider router={router} />
        </div>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
