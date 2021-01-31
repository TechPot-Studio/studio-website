import React from 'react';
import { Helmet } from 'react-helmet';
import 'rsuite/lib/styles/index.less';
import { Affix, Nav, Navbar } from 'rsuite';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import NotFoundPage from './pages/NotFound';
import CommunityPage from './pages/Community';
import ProductDetailPage from './pages/ProductDetail'

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
                </div>
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
            </BrowserRouter>
        );
    }
}

export default App;
