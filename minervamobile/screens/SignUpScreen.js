import React from 'react';
import {Alert, Text, TextInput, View, StyleSheet, Button,Image} from 'react-native';
import {LinearGradient } from 'expo';
//import { Stitch, RemoteMongoClient,BSON} from 'mongodb-stitch-react-native-sdk';

export default class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: this.state,
      password: this.state,
      name: this.state,
      usersCollection: undefined,
      client: undefined,
     };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const atlasClient = navigation.getParam('atlasClient', undefined);
    this.setState({usersCollection: atlasClient.db("minerva").collection("users")});
    console.log("here!");
  }

  static navigationOptions = {
    header: null,
  };

  onPressSign() {
    const {username,password, name} = this.state;
    const {navigate} = this.props.navigation;
    
    const newUser = {
      "id": username,
      "password": password,
      "name": name,
      "type": "student",
           
    }

    this.state.usersCollection.insertOne(newUser)
    .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}, username: ${username}, password: ${password}`))
    .then(() =>navigate('Main',{atlasClient:this.state.atlasClient}))
    .catch(err => console.error(`Failed to insert item: ${err}`))
    
    console.log("registered!");
    Alert.alert("You've Signed Up!", ` Name: ${name} \n NetID: ${username} \n Pass: ${password}`);
    navigate('Main');
  
  }

  render() {
    //const { navigation } = this.props;
    //const atlasClient = navigation.getParam('atlasClient', undefined);
    //const atlasClient = this.props.atlasClient;

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
            placeholder='Enter your Name'
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
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