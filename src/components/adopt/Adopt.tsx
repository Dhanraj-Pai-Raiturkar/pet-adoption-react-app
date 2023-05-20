import { Box, Button, Card, Grid, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import classes from './Adopt.module.css';
import BannerImage from '../bannerImage/BannerImage';
import MaleIcon from '@mui/icons-material/Male';
import ProfileImage from '../profileImage/ProfileImage';
import ProfileDetails from '../profileDetails/ProfileDetails';
import PetProfileCard from '../petProfileCard/PetProfileCard';

function Adopt(props: any) {
    return (
        <Grid>
            <Grid>
                <List>
                    <ListItem>
                        <PetProfileCard imageSrc='./images/pup1.jpg' details={{breed: 'Stray', gender:'male'}} />
                    </ListItem>
                    <ListItem>
                        <PetProfileCard imageSrc='./images/pup2.webp' details={{breed: 'Stray', gender:'female'}} />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

export default Adopt;