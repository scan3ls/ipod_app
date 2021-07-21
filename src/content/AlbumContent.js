import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { sortedAlpha } from '../util';

class AlbumContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const alpha = sortedAlpha(this.props.data);
        const content = [];

        for (const letter in alpha) {
            if (alpha[letter].length === 0) continue;

            const albumList = alpha[letter].map(
                (album) => {
                    return <TouchableOpacity key={album.id} style={styles.button}>
                        <Image
                            style={styles.cover}
                            source={{uri: `${album.cover}`}}
                        />
                        <Text numberOfLines={1} style={styles.name}>{album.name}</Text>
                    </TouchableOpacity>
                }
            );

            content.push(
                <View key={letter}>
                    <Text style={styles.letterTag}>{letter.toUpperCase()}</Text>
                    <View>{albumList}</View>
                </View>
            );
        }

        return (
            <View>{content}</View>
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

export default AlbumContent;
