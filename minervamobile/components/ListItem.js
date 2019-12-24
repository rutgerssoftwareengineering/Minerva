import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {

    render() {
        const {name} = this.props.message;

        return (
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft:15
    }
}

export default ListItem;