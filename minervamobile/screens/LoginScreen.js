import React from 'react';
import {Alert, Text, TextInput, View, StyleSheet, Button, Image} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';
import { Card, CardSection, Input, Spinner } from '../components/common';
import { Stitch, RemoteMongoClient,AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      currentUserId: undefined,
      client: undefined,
      db: undefined,
      usersCollection: undefined,
      username: this.state,
      password: this.state
    };
    this._loadClient = this._loadClient.bind(this);
    this._onPressLogin = this._onPressLogin.bind(this);
  }

  componentDidMount() {
    this._loadClient();
  }

  _loadClient() {
  Stitch.initializeDefaultAppClient('minerva-mobile-zkhyz').then(client => {
    this.setState({ client });
    const dbClient = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
    this.setState({atlasClient : dbClient});
    this.setState({db : dbClient.db("minerva")});
    this.setState({usersCollection: dbClient.db("minerva").collection("users")});
    console.log("got here");
  });
}

  static navigationOptions = {
    header: null,
  };

  _onPressLogin() {
    const {username,password} = this.state;
    const {navigate} = this.props.navigation;
    //Alert.alert('Congrats on logging in!', `You are ${username} and your password is ${password}`)

    //This code anon logs in (don't do this)
    this.state.client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
        console.log(`Successfully logged in as user ${user.id}`);
        this.setState({ currentUserId: user.id })
    }).catch(err => {
        console.log(`Failed to log in anonymously: ${err.errorCode} with message ${err.message}`);
        this.setState({ currentUserId: undefined })
    });


    //navigate('Main');
    console.log(`Username: ${username}`)
    this.state.usersCollection.find({id: username}, {limit:1}).first().then(result => {
      if(result) {
        console.log(`Successfully found user: ${result.name} with netid ${result.id}.`)
        this.props.screenProps.netid = result.id;
        if(result.password == password) {
          console.log('right password');
          navigate('Main',{atlasClient:this.state.atlasClient});
        } else {
          Alert.alert("invalid password");
          console.log('wrong password');
        }
      } else {
        console.log("couldn't find user");
        Alert.alert('User not found');
      }
    })
    .catch(err => console.error(`Failed to find document: ${err}`))
  

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
            placeholder={'Netid'}
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
                  onPress={this._onPressLogin}
                  title="Login"
                />
              </View>

              <View style={styles.buttonRight}>
                <Button
                  onPress={() => navigate('SignUp',{atlasClient:this.state.atlasClient})}
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