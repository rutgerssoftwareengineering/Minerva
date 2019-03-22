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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  create_questions() {
    //get the live questions from the backend 
    var liveQuestions = {json object}
    for question in liveQuestions: //this is python notation, figure out how to do in js
      //create component 
      //add as sub-component 
  }
  render() {
    return (
      <View style={styles.container}>
            <LinearGradient
            colors={['#74EBD5', '#ACB6E5']}
            style={{ flex: 1}}>
              <Text
                style={styles.titleText}>
                Question 
              </Text>
              <ScrollView>

              </ScrollView>
            </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   titleText: {
      backgroundColor: 'transparent',
      fontSize: 100,
      color: '#fff',
      textAlign: 'center',
      marginTop: 50
    },
    container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

