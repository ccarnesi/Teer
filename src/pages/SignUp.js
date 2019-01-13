import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  
} from 'react-native';
 

import SignUpButton from '../components/SignUpButton';
import TextFieldBox from '../components/TextFieldBox';

export default class Login extends Component {
    state = {username:"",password:""}
    
    signUpPressed(){
        this.props.navigation.navigate("SignUp");
    }
    static navigationOptions = {
        header: null
    }
    
    
    render() {
        return (
           <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.mainContainer} scrollEnabled={false}>
                <View style = {styles.imageView}>
                    <Image source = {require('./images/TeerHome-01.jpg')} style = {styles.logoStyle}/>
                </View>
                <View style = {styles.formContainer}>
                    
                        <TextFieldBox inputType = 'Email'/>
                               
                        <TextFieldBox inputType = 'Username'/>
                               
                        <TextFieldBox inputType = 'Password' isPassword = 'true'/>
                                                      
                        <TextFieldBox inputType = 'Confirm Password' isPassword = 'true'/>
                   
                    <TouchableHighlight style = {{button: styles.primaryButton, label: styles.buttonWhiteText}}>
                        <Text style={styles.submitText}>Sign Up</Text>
                    </TouchableHighlight>
                    
               </View>
                <View style = {styles.footer}>
                    <View style = {styles.dontHaveAccount}>
                        <Text style = {{fontSize: 15, color: "#fff"}}>Have an account? </Text>
                        <SignUpButton 
                            onPress={() => this.props.navigation.goBack()}
                            label="Sign in"
                            styles={{label: styles.buttonYellowText}} 
                        />
                    </View>
                </View>
           </KeyboardAwareScrollView>
        );
    }
    
}
const styles = StyleSheet.create({
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    primaryButton: {
        backgroundColor: '#34A853',
       
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#048c84',
        flexDirection: 'column'
    },
    submitText:{
        padding:19,
        color:'#fff',
        textAlign:'center',
        backgroundColor:'#5CB9A2',
        borderRadius: 34,
        borderWidth: 1,
        borderColor: '#5CB9A2',
        overflow: "hidden",
        fontSize: 20
        
    },
    inputView: {
        paddingBottom: 20
    },
    formContainer: {
        flex: 5,
        paddingHorizontal: 50,
        justifyContent: "space-evenly"
    },
    logoStyle:{
        width: 220,
        height: 120,
        alignSelf: "center",
        
        
    },
    buttonYellowText: {
        fontSize: 15,
        color: '#F7D35A'
    },
    dontHaveAccount:{
        flexDirection: "row",
        justifyContent: "center"
    },
    footer: {
        marginTop: 75,
        flex: 1
     },
     imageView:{
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 110,
        paddingBottom: 50,
        
    }
})
 