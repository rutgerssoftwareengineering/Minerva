import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation, NativeModules} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';
const { UIManager } = NativeModules;
 
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {

    componentWillReceiveProps(){
        LayoutAnimation.easeInEaseOut();
    }

    renderDescription() {
        const {library, expanded} = this.props;

        if (expanded) {
            return(
                <CardSection>
                    <Text style ={styles.textStyle}>{library.item.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library.item;



        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            > 
              <View>
                <CardSection>
                  <Text style={titleStyle}>
                    {title}
                  </Text>
                </CardSection>
                {this.renderDescription()}
              </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 20,
        paddingLeft: 15,
    },

    textStyle: {
        paddingLeft: 30,
        flex: 1,
    }
}

const mapStateToProps = (state,ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return {expanded};
};

export default connect(mapStateToProps,actions)(ListItem);