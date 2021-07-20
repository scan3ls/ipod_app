import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import request from '../util';

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
            if (data.Artists !== 'artist') this.props.updateDisplay(data, "Artists");
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
