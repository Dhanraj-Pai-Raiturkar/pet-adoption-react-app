import { Card, Grid,  } from '@mui/material'
import ProfileImage from '../profileImage/ProfileImage';
import ProfileDetails from '../profileDetails/ProfileDetails';

function PetProfileCard(props: any) {

    const { imageSrc, details  } = props;
    return (
        <Card sx={{width:'100vw'}}>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <ProfileImage imageSrc={imageSrc} />
                </Grid>
                <Grid item sm={8} xs={12} p={2} justifyContent={'space-between'} display={'flex'} flexDirection={'row'}>
                    <ProfileDetails breed={details.breed} gender={details.gender} />
                </Grid>
            </Grid>
        </Card>
    );
}

export default PetProfileCard;