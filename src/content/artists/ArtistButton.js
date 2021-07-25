import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class ArtistButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {artist, handlePress} = this.props;
        return <TouchableOpacity onPress={() => {handlePress(artist.id)}}>
            <Text style={styles.artistList}>
                {artist.name}
            </Text>
        </TouchableOpacity>
    }
}


const styles = StyleSheet.create({

    artistList: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginLeft: '1rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem'
    },

});


export default ArtistButton;
