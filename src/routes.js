import React, {useState} from 'react';
import Signin from './components/SignIn';
import Signup from './components/SignUp/signup';
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Routes(props) {
    console.log(props.User.data, ' User')
    const secureRoute = [
        {
            path:'/',
            component:Dashboard
        },
    ]
    const publicRoute = [
        {
            path:'/',
            component:Signin
        },
        {
            path:'/signup',
            component:Signup
        },
    ]
    const RouteManager = () =>{
        if(props.User.data){
            return secureRoute.map(res=>{
                return(
                    <Switch>
                        <Route exact component={res.component} path={res.path} />
                    </Switch>
                )
            })
        }
        else{
            return publicRoute.map(res=>{
                return(
                    <Switch>
                        <Route exact component={res.component} path={res.path} />
                    </Switch>
                )
            })
        }
    }
    return (
        <Router>
            {/* {()=>routeManager()} */}
            <RouteManager/>
        </Router>
    )
}

const mapStateToProps = ({ User }) => ({ User });
const mapDispatchToProps = dispatch => ({
	// SetUser: data => dispatch(setUser(data)),
});
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Routes);
