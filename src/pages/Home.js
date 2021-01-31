import React from 'react';
import './Home.less';
export default class HomePage extends React.Component {
    render() {
        return [
            <div className={"banner"}>
                <h6>Welcome to TechPot Studio</h6>
                ... and a brand new world you are going to explore with us!
            </div>,
            <div>
                {/*<Grid fluid>
                    <Row gutter={8}>
                        <Col xs={4}>
                            <Panel shaded bordered bodyFill style={{ display: 'inline-block', height: cardHeight }}>
                                <img width="100%" src={products[0][2]} alt={products[0][0]} />
                                <Panel header={products[0][0]}>
                                    {products[0][1]}
                                </Panel>
                            </Panel>
                        </Col>
                        <Col xs={4}>
                            <Panel shaded bordered bodyFill style={{ display: 'inline-block', height: cardHeight }}>
                                <img width="100%" src={products[1][2]} alt={products[1][0]} />
                                <Panel header={products[1][0]}>
                                    {products[1][1]}
                                </Panel>
                            </Panel>
                        </Col>
                        <Col xs={4}>
                            <Panel shaded bordered bodyFill style={{ display: 'inline-block', height: cardHeight }}>
                                <img width="100%" src={products[2][2]} alt={products[2][0]} />
                                <Panel header={products[2][0]}>
                                    {products[2][1]}
                                </Panel>
                            </Panel>
                        </Col>
                        <Col xs={4}>
                            <Panel shaded bordered bodyFill style={{ display: 'inline-block', height: cardHeight }}>
                                <img width="100%" src={products[3][2]} alt={products[3][0]} />
                                <Panel header={products[3][0]}>
                                    {products[3][1]}
                                </Panel>
                            </Panel>
                        </Col>
                        <Col xs={4}>
                            <Panel shaded bordered bodyFill style={{ display: 'inline-block', height: cardHeight }}>
                                <img width="100%" src={products[3][2]} alt={products[3][0]} />
                                <Panel header={products[3][0]}>
                                    {products[4][1]}
                                </Panel>
                            </Panel>
                        </Col>
                        <Col xs={4}>
                            <Panel shaded bordered bodyFill style={{ display: 'inline-block', height: cardHeight }}>
                                <img width="100%" src={products[3][2]} alt={products[3][0]} />
                                <Panel header={products[3][0]}>
                                    {products[5][1]}
                                </Panel>
                            </Panel>
                        </Col>
                    </Row>
                </Grid> */}
            </div>
        ]
    }
}
