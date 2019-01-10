/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import{AppRegistry} from 'react-native'


import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});*/

export default class LoginPage extends Component {
  render() {
    return (
      <Login/>
    );
  }
}
AppRegistry.registerComponent('LoginPage', () => LoginPage);

