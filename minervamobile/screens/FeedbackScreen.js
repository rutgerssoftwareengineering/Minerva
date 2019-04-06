// <Text style={styles.buttonText}>Slow Down</Text>

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';
//import { MonoText } from '../components/StyledText';

export default class FeedbackScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  onSlowDown(){
    Alert.alert('You asked to slow down')
  }

  onSpeedUp(){
    Alert.alert('You asked to speed up')
  }

  onVolDown(){
    Alert.alert('You asked to lower Volume')
  }

  onVolUp(){
    Alert.alert('You asked to Speak Up')
  }

  onThumbDown(){
    Alert.alert('You dont understand :( ')
  }

  onThumbUp(){
    Alert.alert('You understand! :)')
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
            <LinearGradient
            colors={['#74EBD5', '#ACB6E5']}
            style={{ flex: 1}}>

              <Text
                style={styles.header}>
                  Software Engineering
              </Text>

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
    flex: 2,
    paddingLeft:20,
    
  },
  button: {
    height: 150,
    width: 150,
    flexDirection: 'column',
    justifyContent:'center',
    flex:1,
    paddingLeft: 15,
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