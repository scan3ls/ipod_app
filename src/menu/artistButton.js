import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { request } from '../util';
import AllArtists from '../content/artists/AllArtists';

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
            if (data.Artists !== 'artist') {
                const content = (
                    <AllArtists
                        data={data}
                        type="Artists"
                        updateDisplay={this.props.updateDisplay}
                    />
                );
                this.props.updateDisplay(content, "Artists")
            };
        })
        .catch(err => {
            console.log(err)
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
