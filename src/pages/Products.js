import React from 'react';
import {Col, Grid, Panel, Row, Tag} from 'rsuite';

class Product extends React.Component {
    generateTag(tags) {
        const arr = [];
        tags.forEach(tag => {
            arr.push((
                <Tag>{tag}</Tag>
            ))
        });
        return arr;
    }

    render() {
        return (
            <Panel header={this.props.header} bordered shaded>
                {this.props.children}
                <br />
                {this.generateTag(this.props.tags)}
            </Panel>
        )
    }
}

export default class ProductsPage extends React.Component {
    render() {
        return [
            <Grid fluid>
                <Row>
                    <Col xs={6}>
                        <Product header="Pecis" tags={['JavaScript', 'TypeScript', 'Web']}>
                            A tool set to make web development easier.
                            Full TypeScript supported.
                        </Product>
                    </Col>
                </Row>
            </Grid>
        ]
    }
}
