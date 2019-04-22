import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import AnnounceItem from '../components/AnnounceItem';

const timer = require('react-native-timer');

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: this.state,
      password: this.state,
      name: this.state,
      announcementCollection: this.state,
      client: undefined,
      dbClient: undefined,
      list: [],
     };
     this._fetchData = this._fetchData.bind(this);
  }

  componentDidMount() {

    const dbClient = this.props.screenProps.atlasClient;
    this.state.announcementCollection = dbClient.db("minerva").collection("announcements");

    //this.setState({announceCollection: atlasClient.db("minerva").collection("announcements")});
    console.log("announcements!");
    this._fetchData();
  }

  componentWillUnmount(){
    timer.clearInterval(this);
  }

  _fetchData(){
    timer.setInterval(this,'getannounce',() => {
      this.state.announcementCollection.find({}).toArray()
      .then(result => {
        console.log(`FOUND ${result.length} items!`)
        this.setState({list: result})
      })
    },10000);
   
  }

  renderAnnouncements() {
      return this.state.list.map(item =>
    <AnnounceItem key={item._id} item ={item}/>);
     
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

              <ScrollView>
                {this.renderAnnouncements()}
              </ScrollView>

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

