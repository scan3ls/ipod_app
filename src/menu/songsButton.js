import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { request } from '../util';

class SongsButton extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const response = request('songs');
        response
        .then(res => res.json())
        .then(data => {
          let text = "";
          data.Songs.forEach(
            (song) => {
                text += `${song.name} - ${song.artist} - ${song.album}\nID: ${song.id}\n\n`;
          });
          this.props.updateDisplay(text);
        })
        .catch(err => {
            console.log(err)
            // this.props.updateDisplay('Something went wrong');
        });
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
