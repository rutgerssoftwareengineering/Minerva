import React from 'react';
import {Alert, Text, TextInput, View, StyleSheet, Button,Image} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';

export default class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: this.state,
      password: this.state,
      email: this.state
     };
  }

  static navigationOptions = {
    header: null,
  };

  onPressSign() {
    const {username,password, email} = this.state;
    const {navigate} = this.props.navigation;
    Alert.alert("You've Signed Up!", ` Email: ${email} \n NetID: ${username} \n Pass: ${password}`);
    navigate('Main');
  
  }

  render() {
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
            Sign Up
            </Text>

            <TextInput
            style={styles.input}
            placeholder='Enter your Email'
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
            />

          	<TextInput
            style={styles.input}
            placeholder='enter your netID'
  	        onChangeText={(username) => this.setState({username})}
  	        value={this.state.username}
  	     	  />

            <TextInput
            style={styles.input}
            placeholder='Enter your Password'
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
            />

            <View style={styles.button}>
              <Button
                type="clear"
                onPress={this.onPressSign.bind(this)}
                title="Submit"
              />
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
      marginBottom: 20
    },
    button: {
      marginTop: 50,
      marginLeft: 150,
      marginRight: 150,
    }
    })