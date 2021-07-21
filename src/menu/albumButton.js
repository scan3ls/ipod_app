import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { request } from '../util';

class AlbumButton extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        const response = request('albums');
        response
        .then(res => res.json())
        .then(data => {
          if (data.Albums !== 'albums') this.props.updateDisplay(data, 'Albums');
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
                <Text>Albums</Text>
            </TouchableOpacity>
        );
    }
}

export default AlbumButton;
