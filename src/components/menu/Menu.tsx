import classes from './Menu.module.css';
import { List } from '@mui/material';
import MenuItem from './MenuItem';
import HouseIcon from '@mui/icons-material/House';
import PetsIcon from '@mui/icons-material/Pets';
import InfoIcon from '@mui/icons-material/Info';
import { redirect } from 'react-router-dom';

function Menu(props: any) {
    return (
        <List sx={{position:'fixed', width:'100%'}}>
            <MenuItem text={'Home'} icon={<HouseIcon />} route={'/'} />
            <MenuItem text={'Adopt'} icon={<PetsIcon />} route={'/adopt'} />
            <MenuItem text={'About'} icon={<InfoIcon />} route={'/about'} />
        </List>
    );
}

export default Menu;