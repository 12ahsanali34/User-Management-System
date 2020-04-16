import React, {useState} from 'react';
import Signin from './components/SignIn/signin';
import Signup from './components/SignUp/signup';
import Search from './utils/Search/search';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Routes() {
  const [searchValue, setSearchValue] = useState("")
  let data = [
        {name:'ahsan',id:"1",position:'director', phone: "03152498159", age:"20"},
        {name:'khan',id:"2",position:'manager', phone: "03152498159", age:"20"},
        {name:'blue',id:"3",position:'l', phone: "03152498159", age:"20"},
        {name:'zeeshan',id:"4",position:'power', phone: "03152498159", age:"20"},
    ]
    return (
        <Router>
            <Switch>
                <Route exact component={Signin} path="/" />
                <Route exact component={Signup} path="/signup" />
            </Switch>
        </Router>
    )
}