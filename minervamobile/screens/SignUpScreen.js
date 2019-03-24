import React from 'react';
import {Alert, Text, TextInput, View, StyleSheet, Button} from 'react-native';
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

  onPressLogin() {
    Alert.alert("You've logged in!")
  }

  render() {
    const {navigate} = this.props.navigation;
  	return(
        <LinearGradient
        colors={['#74EBD5', '#ACB6E5']}
        style={{ flex: 1}}>
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
            onChangeText={(text) => this.setState({text})}
            value={this.state.email}
            />

          	<TextInput
            style={styles.input}
            placeholder='enter your netID'
  	        onChangeText={(text) => this.setState({text})}
  	        value={this.state.username}
  	     	  />

            <TextInput
            style={styles.input}
            placeholder='Enter your Password'
            onChangeText={(text) => this.setState({text})}
            value={this.state.password}
            />

            <View style={styles.button}>
              <Button
                type="clear"
                onPress={() => navigate('Main')}
                title="submit"
              />
            </View>


        </LinearGradient>

	   )
  }
}

const styles = StyleSheet.create ({
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
      fontSize: 100,
      color: '#fff',
      textAlign: 'center',
      marginTop: 150
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