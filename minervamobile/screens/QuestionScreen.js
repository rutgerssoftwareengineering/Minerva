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
import { Card,CardSection, Input } from '../components/common';

const timer = require('react-native-timer');

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      question: this.state,
      questionCollection: this.state,
      dbClient: undefined,
      client: undefined, 
      qList: [],
      askQ: this.state,
     };

     this._fetchData = this._fetchData.bind(this);
     this.onAsk = this.onAsk.bind(this);
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
    timer.setInterval(this,'getquestions',() => {
      this.state.questionCollection.find({},{sort: {rank: -1}}).toArray()
      .then(result => {
        console.log(`FOUND ${result.length} items!`)
        this.setState({qList: result})
      })
    },5000);
   
  }

  componentWillUnmount(){
    timer.clearInterval(this);
  }

  renderQuestions() {
    return this.state.qList.map(item =>
    <QuestionItem key={item._id} item ={item}/>);
   
  }

    onAsk(){
      const {askQ, questionCollection} = this.state;

      const newQuestion = {
        "question": askQ,
        "rank": 1,
      }

      questionCollection.insertOne(newQuestion)
      .then(result => console.log(`Asked Question w/ ID:  ${result.insertedId}, Question: ${askQ}`))
      .then(Alert.alert(`You've asked: ${askQ}`))
      .catch(err => console.error(`Failed to ask question error: ${err}`))

      this.setState({askQ: undefined});
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
    const {container, titleText, askCard, askInput, askButton} = styles;

    return (
      <View style={container}>
        <LinearGradient
          colors={['#74EBD5', '#ACB6E5']}
          style={{ flex: 1}}>
              <Text
                style={titleText}>
                Questions 
              </Text>

            <Card style={askCard}>
              <CardSection>
                  <Input
                    placeholder="Ask a question"
                    label="Ask"
                    value={this.state.askQ}
                    onChangeText={askQ => this.setState({askQ})}
                  />

                  <TouchableOpacity
                    onPress={this.onAsk}
                  >
                    <Text>
                      Ask!
                    </Text>
                  </TouchableOpacity>

              </CardSection>
            </Card>

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
    askCard: {
      borderRadius: 20,
    },
    askInput: {

    },
    askButton: {
      
    },
});

