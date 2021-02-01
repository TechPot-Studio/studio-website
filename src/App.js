import React from 'react';
import { Helmet } from 'react-helmet';
import 'rsuite/lib/styles/index.less';
import { Affix, Container, Content, Footer, Header, Nav, Navbar } from 'rsuite';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import NotFoundPage from './pages/NotFound';
import CommunityPage from './pages/Community';
import ProductDetailPage from './pages/ProductDetail'
import LinkBlank from './components/LinkBlank';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openingPage: 'homepage'
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Helmet>
                        <title>TechPot Studio</title>
                    </Helmet>
                    <Container>
                        <Header>
                            <Affix>
                                <Navbar>
                                    <Navbar.Header
                                        style={{padding: '18px 20px', display: 'inline-block', fontWeight: '600'}}
                                    >
                                        TechPot Studio
                                    </Navbar.Header>
                                    <Navbar.Body>
                                        <Nav>
                                            <Link to="/">
                                                <Nav.Item>Home</Nav.Item>
                                            </Link>
                                            <Link to="/products">
                                                <Nav.Item>Products</Nav.Item>
                                            </Link>
                                            <Link to="/community">
                                                <Nav.Item>Community</Nav.Item>
                                            </Link>
                                            <Link to="/about">
                                                <Nav.Item>About</Nav.Item>
                                            </Link>
                                        </Nav>
                                        <Nav pullRight>
                                        </Nav>
                                    </Navbar.Body>
                                </Navbar>
                            </Affix>
                        </Header>
                        <Content>
                            <Switch>
                                <Route path="/" exact>
                                    <HomePage />
                                </Route>
                                <Route path="/products" exact>
                                    <ProductsPage />
                                </Route>
                                <Route path="/product" exact>
                                    <ProductsPage />
                                </Route>
                                <Route path="/product/:name" exact>
                                    <ProductDetailPage />
                                </Route>
                                <Route path="/community" exact>
                                    <CommunityPage />
                                </Route>
                                <Route>
                                    <NotFoundPage />
                                </Route>
                            </Switch>
                        </Content>
                        <Footer style={{
                            position: 'relative',
                            top: 300,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            color: '#939393'
                        }}>
                            <span>Copyright © 2020-2021, TechPot Studio</span>
                            <br />
                            <LinkBlank to="//vercel.com?utm_source=techpot-studio&utm_campaign=oss">
                                <img src={`${process.env.PUBLIC_URL}/powered-by-vercel.svg`} alt="Powered By Vercel" />
                            </LinkBlank>
                        </Footer>
                    </Container>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
