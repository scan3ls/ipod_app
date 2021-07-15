import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import request from './util';

class AlbumButton extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const response = request();
        let s1 = '';
        for (let index = 0; index < 100; index++) {
            s1 = s1 + '1\n';
        }
        // this.props.updateDisplay(response.responseText);
        this.props.updateDisplay(s1);
    }

    render() {
        return (
            <TouchableOpacity
              onPress={this.handlePress}
              style={{}}>
                <Text>Albums</Text>
            </TouchableOpacity>
        );
    }
}

export default AlbumButton;
