import Font from '../../components/Font';
import Box from '../../components/Box';
import React from 'react';

export default function ComingSoonPlaceHolder() {
    return <Box alignItems="center" justifyContent="center" width={'100%'} height={500}>
        <Font size={18} weight={600} align="center">
            Coming Soon
        </Font>
    </Box>
}