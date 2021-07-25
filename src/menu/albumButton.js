import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { request } from '../util';
import  AllAlbums  from '../content/albums/AllAlbums';

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
          if (data.Albums !== 'albums') {
              const content = <AllAlbums data={data} type='Albums'/>
              this.props.updateDisplay(content, 'Albums');
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
                <Text>Albums</Text>
            </TouchableOpacity>
        );
    }
}

export default AlbumButton;
