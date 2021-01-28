import React from 'react';
import { Helmet } from 'react-helmet';
import 'rsuite/dist/styles/rsuite-default.css';
import { Affix, Nav, Navbar } from 'rsuite';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import NotFoundPage from './pages/NotFound';

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
                                style={{padding: '18px 20px', display: 'inline-block', fontWeight: '600'}}>
                                TechPot Studio

                            </Navbar.Header>
                            <Navbar.Body>
                                <Nav>
                                    <Link to="/">
                                        <Nav.Item>Home</Nav.Item>
                                    </Link>
                                    <Link to="/product">
                                        <Nav.Item>Products</Nav.Item>
                                    </Link>
                                    <Link to="/community">
                                        <Nav.Item>Community</Nav.Item>
                                    </Link>
                                </Nav>
                            </Navbar.Body>
                        </Navbar>
                    </Affix>
                </div>
                <Switch>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                    <Route path="/product">
                        <ProductsPage />
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
