import { Box,IconButton, Typography } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar } from '@mui/material';
import classes from './Navigation.module.css';
import CloseIcon from '@mui/icons-material/Close';

function Navigation(props: any) {

    const { displayMenu, toggleMenu } = props;

    return (
        <Box>
            <AppBar position='static' className={classes.navigation} color='primary'>
                <Box height={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <IconButton>
                        <PetsIcon fontSize='large' sx={{color:'white'}} onClick={() => window.location.href="/adopt"}/>
                    </IconButton>
                    {displayMenu ? <></> : <Typography onClick={() => window.location.href="/"} variant='h4' component='h3' sx={{cursor:'pointer', display:'flex', justifyContent:'center', alignItems:'center', color:'white', fontFamily:'Lobster, cursive', letterSpacing:'0em'}}>PetAdoption</Typography>}
                    <IconButton>
                        {
                            !displayMenu ?
                            <MenuIcon fontSize='large' sx={{color:'white'}} onClick={toggleMenu} /> :
                            <CloseIcon fontSize='large' sx={{color:'white'}} onClick={toggleMenu} />
                        }
                    </IconButton>
                </Box>
            </AppBar>
        </Box>
    );
}

export default Navigation;