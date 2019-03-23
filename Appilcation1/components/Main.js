import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Router, Scene , navigationBarStyle } from 'react-native-router-flux';
import Login from './Login';
import  Home  from "./Home";
import  Registration  from "./Registration";
import PlacementPredictor from "./PlacementPredictor";
import CGPAEstimator from "./CGPAEstimator";
import MastersPrediction from "./MastersPrediction";
import MasterPreditionwithlocation from "./MasterPreditionwithlocation";
import MastersPreditiowithlocation from "./MasterPreditionwithlocation";


export default class Main extends Component{
    render(){
        return(
            <Router navigationBarStyle={styles.titleBar}>
                <Scene key = "root">
                    <Scene key = "home" component = {Home} title = "Home" initial = {true} navigationBarStyle ={{backgroundColor: 'white' , barColor:'#370f42'}} />
                    <Scene key = "placementpredictor" component = {PlacementPredictor} title = "Placement Predictor" />
                    <Scene key = "cgpaestimator" component = {CGPAEstimator} title = "CGPA Estimator" />
                    <Scene key = "mastersprediction" component = {MastersPrediction} title = "Masters Prediction" navigationBarStyle={{backgroundColor:'white'}}/>
                    <Scene key = "masterspredictionwithlocation" component = {MastersPreditiowithlocation} title = "Masters Prediction with location" navigationBarStyle={{backgroundColor:'white'}}/>
                    <Scene key = "login" component = {Login} title = "Login" />
                    <Scene key = "registration" component = {Registration} title = "Registration" />
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    titleBar:{
        backgroundColor: 'transparent'
    }
})