/*import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView, LinearGradient } from '@expo/samples';

 class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
        <View>
            <LinearGradient
            colors={['#74EBD5', '#ACB6E5']}
            style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
              <Text
                style={{
                  backgroundColor: 'transparent',
                  fontSize: 15,
                  color: '#fff',
                }}>
                Sign in with Facebook
              </Text>
            </LinearGradient>
          </View>
    );
  }
}

export default LinksScreen;*/

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';
//import { MonoText } from '../components/StyledText';

export default class FeedbackScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

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
              
              
              </View>

              <View style={styles.rowContainer}>
              
              
              </View>


              <View style={styles.rowContainer}>
              
              
              </View>


              <Button
                onPress={()=>navigate('HomeScreen')}
                title="Phuru"
              />
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


});
