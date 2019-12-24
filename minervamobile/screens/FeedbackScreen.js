// <Text style={styles.buttonText}>Slow Down</Text>

import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from 'react-native';
import {LinearGradient } from 'expo';
//import { MonoText } from '../components/StyledText';

export default class FeedbackScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      announceList: undefined,
      currentClassid: undefined,
      gradesCollection: undefined,
     };
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const dbClient = this.props.screenProps.atlasClient;
    const gradesCollection = dbClient.db("minerva").collection("grades");
    this.setState({
      gradesCollection: gradesCollection
  })

    console.log("--- Feedback Screen ---");
    //find current active class 
    const classCollection = dbClient.db("minerva").collection("classes");
    classCollection.find({inSession: true}, {limit:1}).first().then(result => {
      if(result) {
        console.log(`Successfully found active class: ${result.name}.`)
        this.setState({
          currentClassid: result.classId,
          currentClass: result.name
        })
      } else {
        console.log("Couldn't find active class");
        Alert.alert('No Class in Session');
      }
    })
    .catch(err => console.error(`Failed to connect to Server: ${err}`))
    
  }

  onSlowDown(){
      //find current feedback array 
    console.log('slowing down');

    console.log(`searching for classid ${this.state.currentClassid}`);

    this.state.gradesCollection.find({classid: this.state.currentClassid}, {limit:1}).first().then(result => {
      if(result) {
        console.log(`Successfully found class feedback!: ${result.className}.`)
      } else {
        console.log("Couldn't find class feedback :(");
        Alert.alert('Current Class does not have feedback');
      }
    })
    .catch(err => console.error(`Failed to connect to Server: ${err}`))

    this.state.gradesCollection.updateOne(
       { classid: this.state.currentClassid},
       { $inc: { "feedback.4": 1 }}
    )


  }

  onSpeedUp(){
    console.log('speeding up');

    console.log(`searching for classid ${this.state.currentClassid}`);

    this.state.gradesCollection.find({classid: this.state.currentClassid}, {limit:1}).first().then(result => {
      if(result) {
        console.log(`Successfully found class feedback!: ${result.className}.`)
      } else {
        console.log("Couldn't find class feedback :(");
        Alert.alert('Current Class does not have feedback');
      }
    })
    .catch(err => console.error(`Failed to connect to Server: ${err}`))

    this.state.gradesCollection.updateOne(
       { classid: this.state.currentClassid},
       { $inc: { "feedback.5": 1 }}
    )
  }

  onVolDown(){
    console.log('lower volume');

    console.log(`searching for classid ${this.state.currentClassid}`);

    this.state.gradesCollection.find({classid: this.state.currentClassid}, {limit:1}).first().then(result => {
      if(result) {
        console.log(`Successfully found class feedback!: ${result.className}.`)
      } else {
        console.log("Couldn't find class feedback :(");
        Alert.alert('Current Class does not have feedback');
      }
    })
    .catch(err => console.error(`Failed to connect to Server: ${err}`))

    this.state.gradesCollection.updateOne(
       { classid: this.state.currentClassid},
       { $inc: { "feedback.2": 1 }}
    )
  }

  onVolUp(){
    console.log('volume up');

    console.log(`searching for classid ${this.state.currentClassid}`);

    this.state.gradesCollection.find({classid: this.state.currentClassid}, {limit:1}).first().then(result => {
      if(result) {
        console.log(`Successfully found class feedback!: ${result.className}.`)
      } else {
        console.log("Couldn't find class feedback :(");
        Alert.alert('Current Class does not have feedback');
      }
    })
    .catch(err => console.error(`Failed to connect to Server: ${err}`))

    this.state.gradesCollection.updateOne(
       { classid: this.state.currentClassid},
       { $inc: { "feedback.3": 1 }}
    )
  }

  onThumbDown(){
    console.log("don't get it");

    console.log(`searching for classid ${this.state.currentClassid}`);

    this.state.gradesCollection.find({classid: this.state.currentClassid}, {limit:1}).first().then(result => {
      if(result) {
        console.log(`Successfully found class feedback!: ${result.className}.`)
      } else {
        console.log("Couldn't find class feedback :(");
        Alert.alert('Current Class does not have feedback');
      }
    })
    .catch(err => console.error(`Failed to connect to Server: ${err}`))

    this.state.gradesCollection.updateOne(
       { classid: this.state.currentClassid},
       { $inc: { "feedback.0": 1 }}
    )
  }

  onThumbUp(){
    console.log("i get it! ");

    console.log(`searching for classid ${this.state.currentClassid}`);

    this.state.gradesCollection.find({classid: this.state.currentClassid}, {limit:1}).first().then(result => {
      if(result) {
        console.log(`Successfully found class feedback!: ${result.className}.`)
      } else {
        console.log("Couldn't find class feedback :(");
        Alert.alert('Current Class does not have feedback');
      }
    })
    .catch(err => console.error(`Failed to connect to Server: ${err}`))

    this.state.gradesCollection.updateOne(
       { classid: this.state.currentClassid},
       { $inc: { "feedback.1": 1 }}
    )
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
            <LinearGradient
            colors={['#74EBD5', '#ACB6E5']}
            style={styles.gradientContainer}>

              <Text
                style={styles.header}>
                  {this.state.currentClass}
              </Text>


              <View style={styles.rowContainer}>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onThumbDown.bind(this)}
                >
                  <Image 
                    style={styles.icon}
                    source={require('../assets/images/feedback/thumb_up.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onThumbUp.bind(this)}
                >
                  <Image 
                    style={styles.icon}
                    source={require('../assets/images/feedback/thumb_down.png')}
                  />
                </TouchableOpacity>  

              </View>

              <View style={styles.rowContainer}>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onVolDown.bind(this)}
                >
                  <Image 
                    style={styles.icon2}
                    source={require('../assets/images/feedback/vol_down.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onVolUp.bind(this)}
                >
                  <Image 
                    style={styles.icon2}
                    source={require('../assets/images/feedback/vol_up.png')}
                  />
                </TouchableOpacity>
              
              </View>


              <View style={styles.rowContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onSlowDown.bind(this)}
                >
                  <Image 
                    style={styles.icon}
                    source={require('../assets/images/feedback/slow_down.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onSpeedUp.bind(this)}
                >
                  <Image 
                    style={styles.icon}
                    source={require('../assets/images/feedback/speed_up.png')}
                  />
                </TouchableOpacity>
                <View style={styles.bottom}>

                </View>
              </View>

            </LinearGradient>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  gradientContainer: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'transparent',
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
    marginTop: 60
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    paddingLeft:20,
    
  },
  button: {
    height: 150,
    width: 150,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
  },
  icon: {
    height: 120,
    width: 120,
  },
  icon2: {
    height: 85,
    width: 120,
  },
  buttonText: {
    color: '#fff',
  },
  bottom: {
    marginBottom: 20,
    paddingBottom: 20
  }
});
//    backgroundColor: 'rgba(251,251,251,.4)', for opacity on bg but not text