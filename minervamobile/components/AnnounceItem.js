/* eslint-disable react-native/no-raw-text */
import React from 'react';
import {View,Text} from 'react-native';
import {Card, CardSection} from './common';


// eslint-disable-next-line react/prop-types
const AnnounceItem = ({item}) => {
    const {message, _id, classId} = item;
    //console.log(item);
    const {textStyle, aCard, aSection,} = styles;
  return(
 
        <View>
          <Card >
            <CardSection>
          <Text style={textStyle}>{classId}:{message}</Text>
          </CardSection>
          </Card>
        </View>
  
  );
};

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },

    textStyle: {
        fontSize: 18,
        textAlign: 'center'
    },

    aCard: {

    },
    aSection: {
      
    }
};

export default AnnounceItem;