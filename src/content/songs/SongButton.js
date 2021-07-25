import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class SongButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { song } = this.props;
        return <TouchableOpacity>
            <View style={styles.border}>
                <Text numberOfLines={1} style={styles.songList}>
                    {song.name}
                </Text>
                <Text style={styles.artist}>
                    {song.artist}
                </Text>
            </View>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    songList: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginLeft: '1rem',
        paddingTop: '.5rem'
    },

    artist: {
        marginLeft: '1rem',
        paddingBottom: '.5rem',
    },

    border: {
        borderTopWidth: '2px',
        borderColor: 'rgba(100, 100, 100, 0.5)',
    },
});

export default SongButton;
