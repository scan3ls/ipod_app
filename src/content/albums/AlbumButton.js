import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class AlbumButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {album} = this.props;

        return <TouchableOpacity style={styles.button}>
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