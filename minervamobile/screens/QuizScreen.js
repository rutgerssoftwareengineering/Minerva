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

export default class QuizScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  onA(){
    Alert.alert('Letter A was selected!')
  }

  onB(){
    Alert.alert('Letter B was selected!')
  }

  onC(){
    Alert.alert('Letter C was selected!', 'this is the correct choice :)')
  }

  onD(){
    Alert.alert('Letter D was selected!')
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
                  Quiz!
              </Text>

              <View style={styles.rowContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onA.bind(this)}
                >
                  <Text style={styles.choice}>A</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onB.bind(this)}
                >
                  <Text style={styles.choice}>B</Text>
                </TouchableOpacity>
                
              </View>

              <View style={styles.rowContainer}>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onC.bind(this)}
                >
                  <Text style={styles.choice}>C</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onD.bind(this)}
                >
                  <Text style={styles.choice}>D</Text>
                </TouchableOpacity>
              
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
    marginTop: 75
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 2,
  },
  button: {
    height: 170,
    width: 170,
    flexDirection: 'column',
    justifyContent:'center',
    marginTop: 40,
    flex:1,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: 'rgba(251,251,251,.4)',
    borderRadius: 15,
  },
  choice: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
    opacity: 10,
  }
});
