import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: this.state,
      password: this.state,
      name: this.state,
      announceCollection: undefined,
      client: undefined,
      dbClient: undefined,
     };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const dbClient = this.props.screenProps.atlasClient;
    const announceCollection = dbClient.db("minerva").collection("announcements");
    //this.setState({announceCollection: atlasClient.db("minerva").collection("announcements")});
    console.log("here!");
    console.log(`Annoucne: ${announceCollection.find("_v")} yeet`)
  }

  fetchData(){
    const {navigate} = this.props.navigation;
    
    this.state.announceCollection.find("_v")
      .then((response) => response.json())
      .then
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
            <LinearGradient
            colors={['#74EBD5', '#ACB6E5']}
            style={{ flex: 1}}>
              <Text
                style={styles.titleText}>
                Announcements
              </Text>

              <Text
                style={styles.p}>
                Demo in progress
              </Text>
            </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   titleText: {
      backgroundColor: 'transparent',
      fontSize: 45,
      color: '#fff',
      textAlign: 'center',
      marginTop: 75
    },

    p: {
      fontSize: 30,
      color: '#fff',
      textAlign: 'center',
      marginTop: 100
    },
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

