import React from 'react';
import {Alert, Text, TextInput, View, StyleSheet, Button, Image} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';
import { Card, CardSection, Input, Spinner } from '../components/common';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      username: this.state,
      password: this.state 
     };
  }

  static navigationOptions = {
    header: null,
  };

  onPressLogin() {
    const {username,password} = this.state;
    const {navigate} = this.props.navigation;
    Alert.alert('Congrats on logging in!', `You are ${username} and your password is ${password}`)
    navigate('Main');
  }

  render() {
    const {navigate} = this.props.navigation;
  	return(

        <LinearGradient
        colors={['#74EBD5', '#ACB6E5']}
        style={{ flex: 1}}>
        
            <Image
              style={styles.owl}
              source={require('../assets/images/logo/owletWhite.png')}
            />

          	<Text
	            style={styles.titleText}>
            Minerva
          	</Text>
              
            <Text
              style={styles.loginText}>
            Login
            </Text>

          	<TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
  	     	  />

            <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
            />

            <View style={styles.rowContainer}>
              <View style={styles.buttonLeft}>
                <Button
                  onPress={this.onPressLogin.bind(this)}
                  title="Login"
                />
              </View>

              <View style={styles.buttonRight}>
                <Button
                  onPress={() => navigate('SignUp')}
                  title="Sign Up"
                />
              </View>
            </View>
            
        </LinearGradient>

	   )
  }
}

const styles = StyleSheet.create ({

    owl: {
      height:100,
      width: 100,
      marginTop: 50,
      alignSelf: 'center'
    },
    input: {
      height: 40,
      padding: 10,
      marginTop: 20,
      marginLeft: 50,
      marginRight: 50,
      fontSize: 18,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#48BBEC',
      backgroundColor: 'white',
    }, 
    titleText: {
      backgroundColor: 'transparent',
      fontSize: 75,
      color: '#fff',
      textAlign: 'center',
      marginTop: -25
    },
    loginText: {
      backgroundColor: 'transparent',
      fontSize: 35,
      color: '#fff',
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 50
    },
    buttonLeft: {
      marginTop: 100,
      minWidth: 80,
      marginRight: 50,
      color: '#0D3B66',
    },
    buttonRight: {
      marginTop: 100,
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    })