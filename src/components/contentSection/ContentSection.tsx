import { Box, Typography } from '@mui/material'

function ContentSection(props: any) {
    return (
        <Box>
            <Typography variant='h4' fontWeight={20} sx={{fontFamily:'Shadows Into Light, cursive', letterSpacing:'-0.19rem'}}>How it Works?</Typography>
            {props.children}
        </Box>
    );
}

export default ContentSection;