import { Card, Grid,  } from '@mui/material'
import ProfileImage from '../profileImage/ProfileImage';
import ProfileDetails from '../profileDetails/ProfileDetails';

function PetProfileCard(props: any) {
    return (
        <Card sx={{width:'100vw'}}>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <ProfileImage />
                </Grid>
                <Grid item sm={8} xs={12} px={2} pb={2} justifyContent={'space-between'} display={'flex'} flexDirection={'row'}>
                    <ProfileDetails />
                </Grid>
            </Grid>
        </Card>
    );
}

export default PetProfileCard;