import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Routes/Home';
import Auth from '../Routes/Auth';
import Profile from '../Routes/Profile';
import Navigation from './Navigation';
import { connect } from 'react-redux';

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ?
                (
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                    </>
                ) :
                (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    ); 
};

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(AppRouter);