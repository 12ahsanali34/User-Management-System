import React, {useState} from 'react';
import Signin from './components/SignIn/signin';
import Signup from './components/SignUp/signup';
import ContactList from './components/Dashboard/dashboard';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact component={Signin} path="/" />
                <Route exact component={Signup} path="/signup" />
                <Route exact component={ContactList} path="/contacts" />
            </Switch>
        </Router>
    )
}