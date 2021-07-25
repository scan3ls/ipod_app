import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { getAlbums } from './OneArtist';
import AlbumButton from '../albums/AlbumButton';

class ArtistButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePress(id, updateDisplay) {
        getAlbums(id).then(data =>{
            const content = data.map(
                album => <AlbumButton key={album.id} album={album} updateDisplay={updateDisplay}/>
            );
            updateDisplay(<View>{content}</View>, `${data[0].artist}`);
        });
    }

    render() {
        const {artist, updateDisplay} = this.props;
        return <TouchableOpacity onPress={() => {this.handlePress(artist.id, updateDisplay)}}>
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
