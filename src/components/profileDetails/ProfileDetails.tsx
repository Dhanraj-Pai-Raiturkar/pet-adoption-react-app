import { Box, Stack, Typography, Button } from '@mui/material'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

function ProfileDetails(props: any) {

    const { breed, gender } = props;

    return (
        <Box display={'flex'} flex-flexDirection={'row'} justifyContent={'space-between'} width={'100%'}>
            <Box display={'flex'} alignItems={'start'} flexDirection={'column'}>
                <Stack display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Typography sx={{fontWeight:'600', fontFamily:'Shadows Into Light, cursive'}} variant='h6'><u>Breed:</u> {breed}</Typography>
                </Stack>
                <Stack display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Typography sx={{fontWeight:'600', fontFamily:'Shadows Into Light, cursive'}} variant='h6'><u>Gender:</u></Typography>
                    {
                        gender==="male" ?
                        <MaleIcon fontSize='medium' sx={{ mx:1, color: theme => theme.palette.primary.light }}/> :
                        <FemaleIcon fontSize='medium' sx={{ mx:1, color: theme => theme.palette.primary.dark }}/>
                    }
                </Stack>
            </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Stack display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Button color='success' href='/adopt' size='medium' variant='contained' sx={{ fontSize:'1rem', fontWeight:'900', fontFamily:'Shadows Into Light, cursive'}}>Details</Button>
                </Stack>
            </Box>
        </Box>
    );
}

export default ProfileDetails;