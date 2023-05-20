import BannerImage from '../bannerImage/BannerImage';
import ContentBlock from '../contentBlock/ContentBlock';
import ContentSection from '../contentSection/ContentSection';
import Classes from './Home.module.css';
import { Stack, Grid } from '@mui/material';

function Home(props: any) {
    return (
        <Grid container display={'flex'} flexDirection={'row'} sx={{position:'relative'}}>
            <Grid item className={Classes.home} md={12} sm={12}>
                <Stack>
                    <BannerImage 
                        imageSrc='./images/banner-home2.jpg' 
                        title='Some Banner text'
                        height='16'
                        darkTint={true}
                        backgroundImageStyles={{
                            objectFit:'contain',
                            position: 'relative',
                            zIndex: 1,
                            backgroundImage: `url(${'./images/banner-image1.jpg'})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                        bannerTextStyles={{
                            height: `${21}rem`,
                            color: 'rgb(255 255 255 )',
                            fontFamily: 'Sacramento, cursive',
                        }}
                    />
                    <ContentSection>
                        <ContentBlock imageSrc='./images/searchImage6.png' title="Adopt a dog or cat who's right for you. Simply enter your city above to start your search." />
                        <ContentBlock imageSrc='./images/connectImage1.png' title='Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.' isOdd={true} />
                        <ContentBlock imageSrc='./images/adoptImage.png' title='The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.' />
                    </ContentSection>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Home;