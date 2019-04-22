/* eslint-disable react-native/no-raw-text */
import React from 'react';
import {View,Text, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// eslint-disable-next-line react/prop-types
const ItemDetail = ({item}) => {
    const {message, _id} = item;
    const {headerContentStyle, textStyle} = styles;
  return(
    <Card>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={textStyle}>{message}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },

    textStyle: {
        fontSize: 18
    },
};

export default ItemDetail;