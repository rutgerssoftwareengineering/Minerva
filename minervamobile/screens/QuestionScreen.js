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

import {Input} from '../components/common';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      question: this.state 
     };
  }

  static navigationOptions = {
    header: null,
  };

  
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
    return (
      <View style={styles.container}>
      
              <Text
                style={styles.titleText}>
                Questions 
              </Text>
              <ScrollView>
                  <View style={styles.questionCard}>
                    <Text style={styles.questionCardTitle}>
                      I'm confused... what is the powerhouse of the cell?
                    </Text>
                    <View style={styles.rowContainer}>
                      <Image 
                        style={styles.upvoteButton}
                        source={require('../assets/images/upvote.png')}
                      />
                      <Text style={styles.questionCardScore}>
                        420
                      </Text>
                      <Image 
                        style={styles.downvoteButton}
                        source={require('../assets/images/upvote.png')}
                      />
                    </View>
                  </View>

                  <View style={styles.questionCard}>
                    <Text style={styles.questionCardTitle}>
                      Who gave you the right?
                    </Text>
                    <View style={styles.rowContainer}>
                      <Image 
                        style={styles.upvoteButton}
                        source={require('../assets/images/upvote.png')}
                      />
                      <Text style={styles.questionCardScore}>
                        190
                      </Text>
                      <Image 
                        style={styles.downvoteButton}
                        source={require('../assets/images/upvote.png')}
                      />
                    </View>
                  </View>

                  <View style={styles.questionCard}>
                    <Text style={styles.questionCardTitle}>
                      Salman sUCKS BaL!s
                    </Text>
                    <View style={styles.rowContainer}>
                      <Image 
                        style={styles.upvoteButton}
                        source={require('../assets/images/upvote.png')}
                      />
                      <Text style={styles.questionCardScore}>
                        187
                      </Text>
                      <Image 
                        style={styles.downvoteButton}
                        source={require('../assets/images/upvote.png')}
                      />
                    </View>
                  </View>

                  <View style={styles.questionCard}>
                    <Text style={styles.questionCardTitle}>
                      Forrest Song more like Forest BONG AHAHAHAHAH
                    </Text>
                    <View style={styles.rowContainer}>
                      <Image 
                        style={styles.upvoteButton}
                        source={require('../assets/images/upvote.png')}
                      />
                      <Text style={styles.questionCardScore}>
                        69
                      </Text>
                      <Image 
                        style={styles.downvoteButton}
                        source={require('../assets/images/upvote.png')}
                      />
                    </View>
                  </View>

                  <View style={styles.questionCard}>
                    <Text style={styles.questionCardTitle}>
                      I sexually Identify as an Attack Helicopter. Ever since I was a boy I dreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and I'm fucking retarded but I don't care, I'm beautiful. I'm having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me "Apache" and respect my right to kill from above and kill needlessly. If you can't accept me you're a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.
                    </Text>
                    <View style={styles.rowContainer}>
                      <Image 
                        style={styles.upvoteButton}
                        source={require('../assets/images/upvote.png')}
                      />
                      <Text style={styles.questionCardScore}>
                        187
                      </Text>
                      <Image 
                        style={styles.downvoteButton}
                        source={require('../assets/images/upvote.png')}
                      />
                    </View>
                  </View>
              </ScrollView>
            


                <View style={styles.card}>
                    <Text style={styles.headerStyle}> Why is the sky blue?</Text>
                    <View style= {styles.right}>
                      <TouchableOpacity
                       onPress={this.onUpvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/upvote.png')}
                       
                        />  
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={this.onDownvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/downvote.png')}
                        
                        />  
                      </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.card}>
                    <Text style={styles.headerStyle}> What are we here?</Text>
                    <View style= {styles.right}>
                      <TouchableOpacity
                      onPress={this.onUpvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/upvote.png')}
                        
                        />  
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={this.onDownvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/downvote.png')}
                        
                        />  
                      </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.headerStyle}> What does git revert do?</Text>
                    <View style= {styles.right}>
                      <TouchableOpacity
                      onPress={this.onUpvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/upvote.png')}
                        
                        />  
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={this.onDownvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/downvote.png')}
                        
                        />  
                      </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.headerStyle}> How do you pronounce SQL?</Text>
                    <View style= {styles.right}>
                      <TouchableOpacity
                      onPress={this.onUpvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/upvote.png')}
                        
                        />  
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={this.onDownvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/downvote.png')}
                        
                        />  
                      </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.headerStyle}>How can I host a server?</Text>
                    <View style= {styles.right}>
                      <TouchableOpacity
                      onPress={this.onUpvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/upvote.png')}
                        
                        />  
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={this.onDownvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/downvote.png')}
                        
                        />  
                      </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.headerStyle}>Who will win March Madness?</Text>
                    <View style= {styles.right}>
                      <TouchableOpacity
                      onPress={this.onUpvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/upvote.png')}
                        
                        />  
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={this.onDownvote.bind(this)}>
                        <Image 
                        style={styles.vote}
                        source={require('../assets/images/feedback/downvote.png')}
                        
                        />  
                      </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
                <View style={styles.bottom}>

              </View>
            </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   titleText: {
    backgroundColor: 'transparent',
    fontSize: 50,
    color: '#74EBD5',
    //fontSize: 75,
    //color: '#fff',
    textAlign: 'center',
    marginTop: 50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: 1,
    backgroundColor: '#fff',
  },
  questionCardTitle: {
    color: '#fff',
    margin: 5,
    fontSize: 20,
  },
  questionCardScore: {
    color: '#fff',
    fontSize: 15,
  },
  questionCard: {
    flex:1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    alignItems:'center',
    borderRadius: 5,
    backgroundColor: '#74EBD5',
  },
  upvoteButton: {
    height: 50,
    width: 50,
  },
  downvoteButton: {
    height: 50,
    width: 50,
    transform: [{ rotate: '180deg'}],
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  card: {
    alignContent: 'space-between',
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'rgba(251,251,251,.4)',
    borderRadius: 10,
    maxHeight: 150,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 15,
  },
  headerStyle: {
    color: 'navy',
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    flex: 3,
    textAlign: 'center'
  },
  vote: {
    height: 50,
    width: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  right: {
    flex: 1,
    flexDirection: 'column'
  },
  quest:{
    flex: 4,
    maxHeight: 150,
    flexDirection:'row',
    alignContent: 'space-between'
  },
  input: {
    height: 40,
    padding: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#48BBEC',
    backgroundColor: 'white',
    flex:3
  }, 
  button: {
    minWidth: 80,
    backgroundColor:'navy',
    flex:1
  },
  bottom: {
    marginBottom: 20,
    paddingBottom: 20
  }
});

