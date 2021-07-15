import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import request from './util';

class SongsButton extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const response = request('songs');
        this.props.updateDisplay(response.responseText);
    }

    render() {
        return (
            <TouchableOpacity
              onPress={this.handlePress}
              style={{}}>
                <Text>Songs</Text>
            </TouchableOpacity>
        );
    }
}

export default SongsButton;
