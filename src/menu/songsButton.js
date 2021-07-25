import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { request } from '../util';
import AllSongs from '../content/songs/AllSongs';

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
          if (data.Songs !== 'songs') {
            const content = <AllSongs data={data} type="Songs" />
            this.props.updateDisplay(content, 'Songs');
          }
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
                <Text>Songs</Text>
            </TouchableOpacity>
        );
    }
}

export default SongsButton;
