import { Box } from '@mui/material';
import React from 'react';

function ProfileImage(props: any) {

    const { imageSrc } = props;
    return (
        <Box
            component={'img'}
            src={imageSrc}
            sx={{
                width:'100%',
                /* custom styles */
                height:'100%',
            }}
        />
    );
}

export default ProfileImage;