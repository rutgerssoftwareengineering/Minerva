import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput
} from 'react-native';

import { LinearGradient } from 'expo';
import QuestionItem from "../components/QuestionItem";

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      question: this.state,
      questionCollection: this.state,
      dbClient: undefined,
      client: undefined, 
      qList: [],
     };

     this._fetchData = this._fetchData.bind(this);
  }

  componentDidMount() {
    const dbClient = this.props.screenProps.atlasClient;
    this.state.questionCollection = dbClient.db("minerva").collection("questions");
    console.log("Questions!");
    this._fetchData();
  }

  static navigationOptions = {
    header: null,
  };

  _fetchData(){
    this.state.questionCollection.find({}).toArray()
    .then(result => {
      console.log(`RECIEVERD ${result.length} items!`)
      this.setState({qList: result})
    });
  }

  renderQuestions() {
    return this.state.qList.map(item =>
    <QuestionItem key={item._id} item ={item}/>);
   
  }

    onUpvote() {
      Alert.alert('You have upvoted!')
    }
    onDownvote() {
      Alert.alert('You have downvoted :(')
    }
    onAsk(){
      const {question} = this.state;
      Alert.alert('You have asked a question!',`${question}`)
    }
  //create_questions() {
    //get the live questions from the backend 
    //var liveQuestions = {json object}
    // for question in liveQuestions: //this is python notation, figure out how to do in js
      //create component 
      //add as sub-component 
  //}

  /*

    <View styles={styles.card}>
                  <TextInput
                    value={this.state.question}
                    onChangeText={(question) => this.setState({ question })}
                    placeholder={'Question'}
                    style={styles.input}
  	     	        />
                   <TouchableOpacity
                    style={styles.button}
                    onPress={this.onAsk.bind(this)}>
                     <Text style={color='#fff'}>Ask</Text>
                   </TouchableOpacity>
                </View>


  */

  render() {
    const {container, titleText} = styles;

    return (
      <View style={container}>
        <LinearGradient
          colors={['#74EBD5', '#ACB6E5']}
          style={{ flex: 1}}>
              <Text
                style={titleText}>
                Questions 
              </Text>
              <ScrollView>
                  {this.renderQuestions()}
              </ScrollView>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   titleText: {
      backgroundColor: 'transparent',
      fontSize: 50,
      color: '#fff',
      textAlign: 'center',
      marginTop: 50
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});

