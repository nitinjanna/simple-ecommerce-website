import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product/:id" component={Product} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));