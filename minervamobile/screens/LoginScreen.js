import React from 'react';
import {Text, TextInput, View} from 'react-native';
import { WebBrowser, LinearGradient } from 'expo';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
  	return(
        <LinearGradient
        colors={['#74EBD5', '#ACB6E5']}
        style={{ flex: 1}}>
          	<Text
	            style={{
	              backgroundColor: 'transparent',
	              fontSize: 100,
	              color: '#fff',
	              textAlign: 'center',
	              marginTop: 150
	        }}>
            Minerva
          	</Text>

          	<TextInput
	        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	        onChangeText={(text) => this.setState({text})}
	        value={this.state.text}
	     	/>
        </LinearGradient>

	)
  }
}