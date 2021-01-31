import React from 'react';
import Font from '../components/Font';
import Box from '../components/Box';
export default class ProductDetailPage extends React.Component {
    render() {
        return (
            <Box width="100%" >
                <Font weight={600}>
                    Whoa... What? This page were not completed. We are finding a database to store project information
                </Font>
                <br />
                <Font weight={600}>
                    Please wait until we have a stable server and CDN
                </Font>
            </Box>
        );
    }
}
