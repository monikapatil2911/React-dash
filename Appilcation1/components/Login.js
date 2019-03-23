import React, { Component } from "react";
import {  Text , TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";



export default class Login extends Component{
    gotoRegistrationPage(){
        Actions.registration()
    }
    render(){
        return(
            <TouchableOpacity onPress = { this.gotoRegistrationPage }>
                <Text>GO TO REGISTRATION PAGE</Text>
            </TouchableOpacity>
        );
    }
}