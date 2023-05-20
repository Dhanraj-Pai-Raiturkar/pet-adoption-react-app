import { Box, Grid, Typography,  } from '@mui/material';
import BannerImage from '../bannerImage/BannerImage';

function ContentBlock(props: any) {
    const { title, imageSrc } = props;
    return (
        <Grid 
            flexDirection={props.isOdd ? 'row-reverse' : 'row'}
            container 
            sx={{
                backgroundColor: () => props.isOdd ? '#efefefb0' : 'none'
            }}
            rowSpacing={0}
            p={4}
        >
            <Grid item xl={6} lg={6} xs={12} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Box 
                    component='img' 
                    src={imageSrc}
                    height='8rem'
                    alt='searchIcon'
                />  
            </Grid>
            <Grid item xl={6} lg={6} xs={12} alignItems={'center'}>
                <Typography mx={{xs:5, lg:18}} variant='body1' fontSize={25} sx={{fontFamily:'Shadows Into Light, cursive'}}>{title}</Typography>
            </Grid>
        </Grid>
    );
}

export default ContentBlock;