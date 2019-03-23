import React, { Component } from "react";
import { View , Text , StyleSheet , ImageBackground , Dimensions } from "react-native";
import FlipCard from "react-native-flip-card-view";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class CGPAEstimator extends Component{
    _renderFront() {
        return (
            <View style={styles.FrontPage}>
                <ImageBackground style= {{flex:1 , width: screenWidth, height: screenHeight}}
                            source={require('./Images/f1.jpg')}/>
                <Text style={{
                            marginLeft: 15,
                            marginRight: 10,
                            position: 'absolute',
                            bottom: 50,
                            color: '#2b2c2d',
                            fontWeight: 'bold',
                            fontSize: 35,
                        }}>Form over here</Text>
                <Text></Text>
            </View>);
    }
    _renderBack() {
        return (
            <View style={{backgroundColor: 'transparent', flex:1, height:200 }}>
                <ImageBackground style= {{flex:1 , width: screenWidth, height: screenHeight , opacity:0.8}}
                            source={require('./Images/output.png')}/>
                <Text style={{
                            marginLeft: 15,
                            marginRight: 10,
                            position: 'absolute',
                            bottom: 50,
                            color: '#2b2c2d',
                            fontWeight: 'bold',
                            fontSize: 35,
                        }}>Output</Text>
                <Text></Text>
            </View>);
    }
    render(){
        return(
                <FlipCard style={{flex: 1}}
                velocity={0.5} // Velocity makes it move
                tension={15} // Slow
                friction={1000} // Oscillate a lot
                renderFront={this._renderFront()} 
                renderBack={this._renderBack()}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    FrontPage:{
        //backgroundColor: '',
        flex:1,
        height:400, 
    },
  });