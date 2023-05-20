import { useState } from 'react';
import './App.css';
import Adopt from './components/adopt/Adopt';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './components/menu/Menu';
import { Grid } from '@mui/material';

function App() {
  
  const [showMenu, setShowMenu] = useState(false);

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/adopt',
      element: <Adopt />
    }
  ]);
  
  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  }

  return (
    <div className="App">
      <Grid container display={'flex'} flexDirection={'row'} sx={{position:'relative'}}>
            <Grid item md={showMenu ? 10 : 12} sm={showMenu ? 10 : 12} xs={showMenu ? 8 : 12}>
              <Navigation 
                displayMenu={showMenu}
                toggleMenu={toggleMenu}
              />
              <RouterProvider router={browserRouter} />
              <Footer />
            </Grid>
            <Grid item md={showMenu ? 2 : 0} sm={showMenu ? 2 : 0} xs={showMenu ? 4 : 0} sx={{backgroundColor:(theme) => theme.palette.primary.main, color:'white', opacity:'0.86'}}>
              <Menu />
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
