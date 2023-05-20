import { Box, Typography } from '@mui/material';
import classes from './BannerImage.module.css'
import { relative } from 'path';

function BannerImage(props: any) {
    const { imageSrc, title, darkTint, height, backgroundImageStyles, bannerTextStyles, subTitle } = props;
    return(
        <Box 
            component={'div'}
            sx={{...backgroundImageStyles, backgroundImage: `url(${imageSrc})`}}
            mb={3}
        >
            <Typography 
                variant='h3'
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'flex-end'}
                alignItems={'start'}
                padding={3}
                textAlign={'left'}
                sx={{...bannerTextStyles, height:`${height}rem`, backgroundColor:`${darkTint ? 'rgb(0 0 0 / 44%)' : 'none'}`}}>
                {title}
                <br/>
                <Typography variant='h4' sx={{fontFamily:bannerTextStyles.fontFamily}}>
                    {subTitle}
                </Typography>
            </Typography>
        </Box>
    );
}

export default BannerImage;