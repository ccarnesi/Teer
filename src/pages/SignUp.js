import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableHighlight,
  Alert
} from 'react-native';
 
import Icon from 'react-native-vector-icons/FontAwesome';

import Container from '../components/Container'; //adds bottom margin to whatever it wraps
//with this, you do not have to apply same styles to view multiple times
import Button from '../components/Button';
import Label from '../components/Label';
import SignUpButton from '../components/SignUpButton';


export default class Login extends Component {
    state = {username:"",password:""}
    checkLogin(){
        const{ username,password} = this .state
        if(username =='admin' && password=='admin'){
            this.props.navigation.navigate();
        }else{
            Alert.alert('Error','Username or Password is invalid',[{
                text: "okay"
            }])
        }
    }
    signUpPressed(){
        this.props.navigation.navigate("SignUp");
    }
    
    
    
    render() {
        return (
           <View>
               <Text>Sign Up</Text>
           </View>
        );
    }
}
 