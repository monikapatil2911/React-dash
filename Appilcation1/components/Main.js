import React, { Component } from "react";
//import { View } from "react-native";
import { Router, Scene } from 'react-native-router-flux';
import Login from './Login';
import  Home  from "./Home";
import  Registration  from "./Registration";

export default class Main extends Component{
    render(){
        return(
            <Router>
                <Scene key = "root">
                    <Scene key = "home" component = {Home} title = "Home" initial = {true} />
                    <Scene key = "login" component = {Login} title = "Login" />
                    <Scene key = "registration" component = {Registration} title = "Registration" />
                </Scene>
            </Router>
        );
    }
}