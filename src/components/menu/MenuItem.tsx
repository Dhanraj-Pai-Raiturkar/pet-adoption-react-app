import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

function MenuItem(props: any) {
    const { text, icon, route } = props;
    return (
        <ListItem disablePadding sx={{":hover":{
                backgroundColor:'#f9f9f9',
                color:(theme) => theme.palette.primary.main,
                "& .MuiListItemIcon-root": {
                    color: (theme) => theme.palette.primary.main
                }
                }
            }}
            onClick={() => window.location.href = route}
        >
            <ListItemButton>
            <ListItemIcon sx={{ color:'white' }} >
                {icon}
            </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    );
}

export default MenuItem;