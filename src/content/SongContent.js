import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { sortedAlpha } from '../util';
class SongContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.data);
        const alpha = sortedAlpha(this.props.data);
        const content = [];

        for (const letter in alpha) {
            if (alpha[letter].length === 0) continue;

            const songList = alpha[letter].map((song) => {
                return <TouchableOpacity key={song.id}>
                    <View style={styles.border}>
                        <Text numberOfLines={1} style={styles.songList}>
                            {song.name}
                        </Text>
                        <Text style={styles.artist}>
                            {song.artist}
                        </Text>
                    </View>
                </TouchableOpacity>
            });

            content.push(
                <View key={letter}>
                    <Text style={styles.letterTag}>
                        {letter.toUpperCase()}
                    </Text>
                    <View>
                        {songList}
                    </View>
                </View>
            );
        }

        return (
            <View>
                {content}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    letterTag: {
        backgroundColor: '#b4b3fd',
        color: 'white',
        paddingLeft: '1rem',
        fontSize: '1.5rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        borderStyle: 'solid',
        borderColor: '#7e84db',
        borderTopWidth: '3px'
    },

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

export default SongContent;
