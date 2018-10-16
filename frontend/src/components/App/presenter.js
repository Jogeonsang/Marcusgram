import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
import Footer from 'components/Footer';

const App = props => [
    //nav
    props.isLoggedIn ? <PrviateRoutes Key={2} /> : <PublicRoutes key={2} />,
    <Footer Key={3} />
];

const PrviateRoutes = props => (
    <Switch>
        <Route exact path='/' render={() => 'feed'} />
        <Route exact path='/explore' render={() => 'explore'} />
    </Switch>
);

const PublicRoutes = props => (
    <Switch>
        <Route exact path='/' render={() => 'login'} />
        <Route exact path='/forgot' render={() => 'password'} />
    </Switch>
);

export default App;