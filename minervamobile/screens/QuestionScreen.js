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

import { LinearGradient } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  //create_questions() {
    //get the live questions from the backend 
    //var liveQuestions = {json object}
    // for question in liveQuestions: //this is python notation, figure out how to do in js
      //create component 
      //add as sub-component 
  //}

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
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
   titleText: {
      backgroundColor: 'transparent',
      fontSize: 50,
      color: '#74EBD5',
      textAlign: 'center',
      marginTop: 50
    },
    container: {
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
});

