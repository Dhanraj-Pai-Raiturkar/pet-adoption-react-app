import React from 'react';
import { Box, Stack, Typography } from '@mui/material'
import Classes from './Footer.module.css';
import { IconButton } from 'material-ui';

function Footer(props: any) {
    return (
        <Box className={Classes.footer} sx={{backgroundColor: (theme) => theme.palette.primary.main}}>
            <Stack direction='column' padding={3}>
                <Typography variant='body2' fontFamily={'Poppins, sans-serif'}>
                    © 2023 Your Dog Adoption Center. All rights reserved.
                </Typography>
                <Typography variant='body2' fontFamily={'Poppins, sans-serif'}>
                    123 Main Street, City, State, ZIP
                </Typography>
                <Typography variant='body2' fontFamily={'Poppins, sans-serif'}>
                    Phone: 123-456-7890 | Email: info@yourdogadoptioncenter.com
                </Typography>
            </Stack>
        </Box>
    );
}

export default Footer;