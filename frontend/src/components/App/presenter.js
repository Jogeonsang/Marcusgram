import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Footer from 'components/Footer';
import Auth from 'components/Auth';
import Navigation from 'components/Navigation';
import Feed from 'components/Feed';
import Explore from 'components/Explore';

const App = props => [
    props.isLoggedIn ? <Navigation key={1} /> : null,
    props.isLoggedIn ? <PrviateRoutes Key={2} /> : <PublicRoutes key={2} />,
    <Footer Key={3} />
];

const PrviateRoutes = props => (
    <Switch>
        <Route exact path='/' component={Feed} />
        <Route exact path='/explore' component={Explore} />
    </Switch>
);

const PublicRoutes = props => (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route exact path='/forgot' render={() => 'password'} />
    </Switch>
);

export default App;