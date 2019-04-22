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
import { BSON} from 'mongodb-stitch-react-native-sdk';

//import { MonoText } from '../components/StyledText';

export default class QuizScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      classQuizCollection: undefined,
      currentClassid:undefined,
      question: undefined,
      ans1: undefined, 
      ans2: undefined,
      ans3: undefined, 
      ans4: undefined,
      netid: undefined
     };
     this.setWatcher = this.setWatcher.bind(this);
  }

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const dbClient = this.props.screenProps.atlasClient;
    const dbCollection = dbClient.db("minerva").collection("inClassQuiz");

    this.setState({
      classQuizCollection: dbCollection,
      netid: this.props.screenProps.netid,
    })

    console.log("--- Quiz Screen ---");

    //find current active class 

    const classCollection = dbClient.db("minerva").collection("classes");
    classCollection.find({inSession: true}, {limit:1}).first().then(result => {
      if(result) {
        console.log(`Successfully found active class: ${result.name}.`)
        this.setState({
          currentClassid: result.classId
        })
      } else {
        console.log("Couldn't find active class");
        Alert.alert('No Class in Session');
      }
    })
    .catch(err => console.error(`Failed to connect to Server: ${err}`))

    //current Question 

    dbCollection.find({isActive: true}, {limit:1}).first().then(result => {
      if(result){
        console.log("found quiz");
        this.setState({
          question: result.question,
          ans1: result.answers[0],
          ans2: result.answers[1],
          ans3: result.answers[2],
          ans4: result.answers[3],
          docid: result._id,
        })
      } else {
        console.log(`class id is ${this.state.currentClassid}`);
        console.log("can't find quiz");
      }
    })

  
}

setWatcher() {
   // Create a change stream that watches the documents
   const id1 = new BSON.ObjectId(this.state.docid);
   const stream = this.props.screenProps.atlasClient.watch(id1);
   // Set up a change event handler function for the stream
   stream.onNext((event) => {
     // Handle the change events for all specified documents here
     console.log(event.fullDocument);
   });
  }

getCurrentQuestion() {
    console.log("getting quesitons");
    if(this.state.classQuizCollection == undefined) {
      console.log("yikes")
    }
    this.state.classQuizCollection.find({classId: currentClassid, isActive: true}, {limit:1}).first().then(result => {
      if(result) {
        console.log(`Successfully found question: ${result.quizTitle}.`)
        this.setState({
          quizTitle: result.quizTitle,
          question: result.question,
          ans1: result.answers[0],
          ans2: result.answers[0],
          ans3: result.answers[0],
          ans4: result.answers[0],
        })
      } else {
        console.log("Couldn't find active class");
        Alert.alert('No Class in Session');
      }
    })
    .catch(err => console.error(`Failed to connect to Server: ${err}`))

  }

  onA(){

    this.state.classQuizCollection.find(
        { classId: this.state.currentClassid, isActive: true},
        { limit:1}
      ).first().then(result => {
        if(result){
          const responses = result.responses;
          console.log(responses);
          const netid = this.state.netid;
          const currentClassid = this.state.currentClassid;
          const classQuizCollection = this.state.classQuizCollection;
          var exists = 0;
          var index;
          responses.forEach(function(item, i){
            if(item[0] == netid) {
              exists = 1;
              index = i;
            }
          });

          if (exists) {
            Alert.alert("you've already answered this question!");
          } else {
            console.log("adding new answer");
              classQuizCollection.updateOne(
                 { classId: currentClassid, isActive: true},
                 { $addToSet: { "responses": [netid,"1"] }}
              )
              Alert.alert(`Ans ${result.answers[0]} selected`)
          }

        } else {

        }
      })
    
    this.setWatcher();
  }

  onB(){
    this.state.classQuizCollection.find(
        { classId: this.state.currentClassid, isActive: true},
        { limit:1}
      ).first().then(result => {
        if(result){
          const responses = result.responses;
          console.log(responses);
          const netid = this.state.netid;
          const currentClassid = this.state.currentClassid;
          const classQuizCollection = this.state.classQuizCollection;
          var exists = 0;
          var index;
          responses.forEach(function(item, i){
            if(item[0] == netid) {
              exists = 1;
              index = i;
            }
          });

          if (exists) {
            Alert.alert("you've already answered this question!");
          } else {
            console.log("adding new answer");
              classQuizCollection.updateOne(
                 { classId: currentClassid, isActive: true},
                 { $addToSet: { "responses": [netid,"2"] }}
              )
              Alert.alert(`Ans ${result.answers[0]} selected`)
          }



        } else {

        }
      })
  }

  onC(){
    this.state.classQuizCollection.find(
        { classId: this.state.currentClassid, isActive: true},
        { limit:1}
      ).first().then(result => {
        if(result){
          const responses = result.responses;
          console.log(responses);
          const netid = this.state.netid;
          const currentClassid = this.state.currentClassid;
          const classQuizCollection = this.state.classQuizCollection;
          var exists = 0;
          var index;
          responses.forEach(function(item, i){
            if(item[0] == netid) {
              exists = 1;
              index = i;
            }
          });

          if (exists) {
            Alert.alert("you've already answered this question!");
          } else {
            console.log("adding new answer");
              classQuizCollection.updateOne(
                 { classId: currentClassid, isActive: true},
                 { $addToSet: { "responses": [netid,"3"] }}
              )
              Alert.alert(`Ans ${result.answers[0]} selected`)
          }



        } else {

        }
      })
  }

  onD(){
    this.state.classQuizCollection.find(
        { classId: this.state.currentClassid, isActive: true},
        { limit:1}
      ).first().then(result => {
        if(result){
          const responses = result.responses;
          console.log(responses);
          const netid = this.state.netid;
          const currentClassid = this.state.currentClassid;
          const classQuizCollection = this.state.classQuizCollection;
          var exists = 0;
          var index;
          responses.forEach(function(item, i){
            if(item[0] == netid) {
              exists = 1;
              index = i;
            }
          });

          if (exists) {
            Alert.alert("you've already answered this question!");
          } else {
            console.log("adding new answer");
              classQuizCollection.updateOne(
                 { classId: currentClassid, isActive: true},
                 { $addToSet: { "responses": [netid,"4"] }}
              )
              Alert.alert(`Ans ${result.answers[0]} selected`)
          }



        } else {

        }
      })
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
                  {this.state.question}
              </Text>

              <View style={styles.rowContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onA.bind(this)}
                >
                  <Text style={styles.choice}>{this.state.ans1}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onB.bind(this)}
                >
                  <Text style={styles.choice}>{this.state.ans2}</Text>
                </TouchableOpacity>
                
              </View>

              <View style={styles.rowContainer}>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onC.bind(this)}
                >
                  <Text style={styles.choice}>{this.state.ans3}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={this.onD.bind(this)}
                >
                  <Text style={styles.choice}>{this.state.ans4}</Text>
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
