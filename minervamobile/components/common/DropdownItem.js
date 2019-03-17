import React, {PureComponent} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {findWeather} from '../../actions';

class DropdownItem extends PureComponent {

    handlePress = async() => {
        const res = await this.props.fetchDetails(this.props.place_id)
        console.log('result',res.geometry.location.lat,res.geometry.location.lng);
        findWeather(res.geometry.location.lat,res.geometry.location.lng);
    }

    render() {
        return (
            <TouchableOpacity style={styles.root} onPress={this.handlePress}>
                <Text>{this.props.description}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = {
    root: {
        height: 38,
        width: 300,
        borderBottomWidth: 1,
        justifyContent: 'center',
    }
}

export {DropdownItem};