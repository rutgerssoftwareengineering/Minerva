import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { ExpoLinksView, LinearGradient } from '@expo/samples';

export default class LinksScreen extends React.Component {
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