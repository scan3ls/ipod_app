import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import request from './util';

class AlbumButton extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const response = request('albums');
        const data = JSON.parse(response.responseText).Albums;
        let s1 = "";
        data.forEach(
            (album) => {
                console.log(album);
                s1 += `${album.artist}\n${album.name}\nSongs: [\n ${album.songs.map((song) => `\t${song}\n`).join('')}]\n\n`
        });
        
        this.props.updateDisplay(`${s1}\n`);
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
