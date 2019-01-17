import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput
} from 'react-native';
 
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
            <KeyboardAwareScrollView style={{ backgroundColor: '#4c69a5' }} resetScrollToCoords={{ x: 0, y: 0 }} contentContainerStyle={styles.mainContainer} scrollEnabled={false}>
                <View style = {styles.imageView}>
                    <Image source = {require('./images/TeerHome-01.jpg')} style = {styles.logoStyle}/>
                </View>
                    

                <View style = {styles.formContainer}>
                        <View style = {styles.inputContainer}>
                            <View style = {styles.inputStyle}>
                                <TextInput style={styles.loginInputs} placeholder = 'Username' placeholderTextColor='white'/>
                            </View>
                            <View style = {styles.inputStyle}>
                                <TextInput style={styles.loginInputs} placeholder = 'Password' placeholderTextColor='white'/>
                            </View>
                            
                        </View>
                        

                        <TouchableHighlight style = {styles.forgotPassButton} onPress={() => this.props.navigation.navigate('ForgotPassScreen')} >
                            <Text style={styles.forgotPassText}>Forgot Password?</Text>
                        </TouchableHighlight>
                        <View style = {styles.signInButtonContainer}>
                            <TouchableHighlight style = {styles.primaryButton} onPress={_=>this.checkLogin()} >
                                <Text style={styles.submitText}>Sign In</Text>
                            </TouchableHighlight>
                        </View>
                        

                </View>

                <View style = {styles.footer}>
                    <View style = {styles.dontHaveAccount}>
                        <Text style = {{fontSize: 15, color: "#fff"}}>Don't have an account? </Text>
                        <SignUpButton 
                            onPress={() => this.props.navigation.navigate('SignUpScreen')}
                            label="Sign Up"
                            styles={{label: styles.buttonYellowText}} 
                        />
                    </View>
                </View>
                
            </KeyboardAwareScrollView>
        );
    }
}
  const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#048c84',
        flex:1,
        flexDirection: 'column'
    },
    inputStyle: {
       paddingBottom: 20,
       width: 260
    },
    formContainer:{
        flex: 10,
        alignItems: 'center',
        justifyContent: "center"
        
    },
    imageView:{
        flex: 6,
        alignItems: "center",
        justifyContent: "flex-end",

    },
    
    forgotPassButton: {
        backgroundColor: '#048c84',
        alignSelf: "center",
    },
    forgotPassText: {
        color: 'white'
    },
    signInButtonContainer: {
        paddingTop: 40
    },
    loginInputs: {
        height: 50,
        fontSize: 20, 
        borderRadius: 30, 
        backgroundColor: '#048c84', 
        borderWidth: 1,
        borderColor: '#5CB9A2',
        paddingHorizontal: 20
    },

    buttonYellowText: {
        fontSize: 15,
        color: '#F7D35A'
    },
    primaryButton: {
        backgroundColor: '#048c84',
        fontSize: 20,
        width: 260,
        color: '#FFF',
    },
    footer: {
       marginTop: 100,
       flex: 2
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
        width: 220,
        height: 120,
        alignItems: "center",
        justifyContent: "center"
        
    },
    dontHaveAccount:{
        flexDirection: "row",
        alignSelf: "center"
    }
  })