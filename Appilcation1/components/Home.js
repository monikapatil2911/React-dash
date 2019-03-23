import React, { Component } from "react";
import { View , ImageBackground , Image ,  Text , StyleSheet , ScrollView , FlatList , Dimensions , TouchableOpacity } from "react-native";
import  { Transition }  from "react-navigation-fluid-transitions";
import { Actions } from "react-native-router-flux";



let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
let arrTapBar = [{"key": "Masters Prediction" , "value": "With location" , "index" : 0 } , {"key": "Masters Prediction1" , "value": "Without location" , "index" : 1 } , {"key": "Placement Predictor" , "value": "best company for you" , "index" : 2 }, {"key": "CGPA Estimator" , "value": "set a target" , "index" :3 }]

export default class Home extends Component{
    gotoNextPage(item){
        if (item == 0 )
            return Actions.masterspredictionwithlocation()
        else if (item == 1)
            return Actions.mastersprediction()
        else if (item == 2)
            return Actions.placementpredictor()
        else if (item == 3)
            return Actions.cgpaestimator()
        
    }
    renderGridItem(item, index) {
        return (
            <TouchableOpacity
                activeOpacity = {1} onPress = {() => this.gotoNextPage(item["index"])} >
                <Transition shared={item['key' , 'value']} >
                    <View style={styles.bottomGridItemContainer}>
                        <Image source = {require('./Images/award.png')} style ={{width:150 , height : 150 , marginLeft: 20}} />
                        <Text style={{
                            marginLeft: 150,
                            marginRight: 10,
                            position: 'absolute',
                            bottom: 100,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}>{item['key']}</Text>
                        <Text style={{
                            marginLeft: 200,
                            marginRight: 10,
                            position: 'absolute',
                            bottom: 80,
                            color: 'white',
                            fontSize: 15,
                        }}>{item['value']}</Text>
                    </View> 
                 </Transition>
            </TouchableOpacity>
        );
    }
    render(){
        return(
                 <ImageBackground style= {{flex:1 , width: screenWidth, height: screenHeight , opacity: 1}}
                    source={require('./Images/g11.jpg')}>
                    <Text style={{color:'white' , fontSize:25 , marginLeft: 50 , top:20 }} >Welcome to</Text>
                    <Text style={{color:'white' , fontSize:35 , marginLeft: 50 , top:20 , fontWeight: 'bold',}}>Career E-Prophet</Text>
                    <Text style={{color:'white' , fontSize:15 , marginLeft: 50 , top:20}}>Prognostication of your Career</Text>
                    <ScrollView style={styles.mainContainer}>
                        <View style={styles.bottomGridContainer}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                onPress
                                horizontal={true}
                                data={arrTapBar}
                                renderItem={({item, index}) => this.renderGridItem(item, index)}
                            />
                        </View>
                    </ScrollView>
                        <Text style={{color:'#112F5E' , fontSize:25 , marginLeft: 30 , bottom:360}}>Choose the best option for you</Text>
                </ImageBackground>
        ); 
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    bottomGridItemContainer: {
        opacity:1,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 240,
        marginBottom: 10,
        width: screenWidth * 300 / 375,
        height: screenHeight / 2 - 70,
        backgroundColor: '#2B285F',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 15,
        
    },
  }); 