import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import request from './util';

class ArtistButton extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const response = request('artists');
        const data = JSON.parse(response.responseText).Artists;
        let text = "";
        data.forEach(
            (artist) => {
                text += `${artist.name}\nAlbums [\n${artist.albums.map((album) => `\t${album}\n`).join('')}]\n\n`;
        });
        this.props.updateDisplay(text);
    }

    render() {
        return (
            <TouchableOpacity
              onPress={this.handlePress}
              style={{}}>
                <Text>Artists</Text>
            </TouchableOpacity>
        );
    }
}

export default ArtistButton;
