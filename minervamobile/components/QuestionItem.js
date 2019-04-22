
import React from 'react';
import {View,Text, TouchableOpacity, Image, Alert} from 'react-native';
//import {Card, CardSection} from './common';



const QuestionItem = ({item}) => {
    const {_id,question,rank} = item;
    console.log(item);
    const {questionCard,questionCardTitle,rowContainer,upvoteButton,downvoteButton,questionCardScore} = styles;
  
    return(
    <View style={questionCard}>
      <Text style={questionCardTitle}>
        {question}
      </Text>
    
    <View style={rowContainer}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("WOO!");
        }}>
        <Image 
          style={upvoteButton}
          source={require('../assets/images/upvote.png')}
        />
      </TouchableOpacity>
      
      <Text style={questionCardScore}>
        {rank}
      </Text>
      
      <TouchableOpacity
        onPress={() => {
          Alert.alert("NOOO!");
        }}
      >
        <Image 
          style={downvoteButton}
          source={require('../assets/images/upvote.png')}
        />
      </TouchableOpacity>
      
    </View>
  </View>
  
  );
};

const styles = {
    questionCardTitle: {
        color: 'navy',
        margin: 5,
        fontSize: 20,
      },
      questionCardScore: {
        color: 'navy',
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
        backgroundColor: 'rgba(251,251,251,.4)'
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
};

export default QuestionItem;