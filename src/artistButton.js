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
        response
        .then(res => res.json())
        .then(data => {
            let text = "";
            data.Artists.forEach(
                (artist) => {
                    text += `${artist.name}\nID: ${artist.id}\nAlbums [\n${artist.albums.map((album) => `\t${album}\n`).join('')}]\n\n`;
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
                <Text>Artists</Text>
            </TouchableOpacity>
        );
    }
}

export default ArtistButton;
