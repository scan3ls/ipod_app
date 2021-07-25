import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { getSongs } from './songsByAlbum';
import SongButton from '../songs/SongButton';

class AlbumButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handlePress(id, updateDisplay) {
        getSongs(id).then(data => {
            const content = data.map(song => <SongButton key={song.id} song={song} />);
            updateDisplay(content, `${data[0].album}`);
        });
    }

    render() {
        const {album, updateDisplay} = this.props;
        return <TouchableOpacity style={styles.button} onPress={() => {this.handlePress(album.id, updateDisplay)}}>
                    <Image
                        style={styles.cover}
                        source={{uri: `${album.cover}`}}
                    />
                    <Text numberOfLines={1} style={styles.name}>{album.name}</Text>
                </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row'
    },

    cover: {
        width: '7rem',
        height: '7rem'
    },

    name: {
        textAlignVertical: 'center',
        margin: 'auto',
        marginLeft: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
});

export default AlbumButton;