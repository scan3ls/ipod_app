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
        const data = JSON.parse(response.responseText).Songs;
        let text = "";
        data.forEach(
            (song) => {
                text += `${song.name} - ${song.artist} - ${song.album}\n`;
        });
        this.props.updateDisplay(text);
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
