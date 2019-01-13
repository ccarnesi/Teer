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

    static navigationOptions = {
        header: null
    }
    
    
    
    render() {
        return (
            <ScrollView style={styles.scroll}>
                <View style = {styles.imageView}>
                    <Image source = {require('./images/TeerHome-01.jpg')} style = {styles.logoStyle}/>
                </View>
                    

                <View>
                        <TextInput
                            style={{
                                height: 60, 
                                fontSize: 25, 
                                borderRadius: 30, 
                                backgroundColor: '#048c84', 
                                borderWidth: 1,
                                textAlign: "center", 
                                borderColor: '#5CB9A2'}}
                                placeholder = "Username"
                                placeholderTextColor = "#fff"
                        />
                </View>

                <View>
                    
                    <TextInput
                                style={{
                                    height: 60, 
                                    fontSize: 25, 
                                    borderRadius: 30, 
                                    backgroundColor: '#048c84', 
                                    borderWidth: 1,
                                    textAlign: "center", 
                                    borderColor: '#5CB9A2'}}
                                    placeholder = "Password"
                                    placeholderTextColor = "#fff"
                                    secureTextEntry = "true"
                        />
                </View>

                <Container>
                    <Button 
                        label="Forgot Password?"
                        styles={{button: styles.alignCenter, label: styles.label}} 
                        />
                </Container>
                <View>
                    <Container>
                        <TouchableHighlight style = {{button: styles.primaryButton, label: styles.buttonWhiteText}} onPress={_=>this.checkLogin()} >
                            <Text style={styles.submitText}>Sign In</Text>
                        </TouchableHighlight>
                        
                    </Container>
                </View>
                <View style = {styles.footer}>
                    <View style = {styles.dontHaveAccount}>
                        <Text style = {{fontSize: 20, color: "#fff"}}>Don't have an account? </Text>
                        <SignUpButton 
                            onPress={() => this.props.navigation.navigate('SignUpScreen')}
                            label="Sign Up"
                            styles={{label: styles.buttonYellowText}} 
                        />
                    </View>
                </View>
                
            </ScrollView>
        );
    }
}
  const styles = StyleSheet.create({
    scroll: {
    backgroundColor: '#048c84',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#fff',
        fontSize: 20
    },
    alignCenter: {
        alignSelf: 'center'
    },
    textInput: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#FFF'
    },
    transparentButton: {
        marginTop: 30,
        borderColor: '#3B5699',
        borderWidth: 2
    },
    buttonBlueText: {
        fontSize: 20,
        color: '#3B5699'
    },
    buttonBigText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    buttonYellowText: {
        fontSize: 20,
        color: '#F7D35A'
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
       marginTop: 100
    },
    submitText:{
        paddingTop:20,
        paddingBottom:20,
        color:'#fff',
        textAlign:'center',
        backgroundColor:'#5CB9A2',
        borderRadius: 34,
        borderWidth: 1,
        borderColor: '#5CB9A2',
        overflow: "hidden",
        fontSize: 20
        
    },
    logoStyle:{
        width: 193,
        height: 110,
        alignSelf: "center"
        
    },
    imageView:{
        paddingTop: 80,
        paddingBottom: 80
    },
    dontHaveAccount:{
        flexDirection: "row",
        alignSelf: "center"
    }
  })