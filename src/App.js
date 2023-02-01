import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Routes';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
