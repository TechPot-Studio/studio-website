import React from 'react';
import {Button} from 'rsuite';
import {Link} from 'react-router-dom';
export default class NotFoundPage extends React.Component {
    render() {
        return (
            <div style={{
                width: '100%',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <h6 style={{fontSize: 75, fontWeight: '600', lineHeight: '90px', textShadow: '5px 5px 5px #ccc'}}>404</h6>
                <div style={{fontSize: 25}}>
                    We cannot find the page you're looking for.
                </div>
                <br />
                <br />
                <Link to="/"><Button size="lg">HomePage</Button></Link>
            </div>
        );
    }
}
