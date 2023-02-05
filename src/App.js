import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import AuthContextProvider from './Contexts/AuthContextProvider';
import CartContextProvider from './Contexts/CartContextProvider';
import { router } from './Routers/Routes';
import { theme } from './Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <CartContextProvider>
          <div className="App">
            <CssBaseline />
            <RouterProvider router={router} />
          </div>
        </CartContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
