import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class ArtistContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const artists = this.props.data;
        const sorted = artists.sort((a, b)=> (a.name > b.name) ? 1 : -1);
        const alpha = {};
        const content = [];

        'abcdefghijklmnopqrstuvwxyz'.split('').forEach(
            letter => {
                alpha[letter] = [] ;
            }
        );

        sorted.forEach(
            artist => {
                const letter = artist.name[0].toLowerCase();
                alpha[letter].push({
                    id: `${artist.id}`,
                    name: `${artist.name}`
                })
            }
        );

        for (const letter in alpha) {
            if (alpha[letter].length === 0) continue;
            const artistList = alpha[letter].map((artist) => {
                return <TouchableOpacity key={artist.id}>
                    <Text style={styles.artistList}>
                        {artist.name}
                    </Text>
                </TouchableOpacity>
            });
            content.push(
                <View key={letter}>
                    <Text style={styles.letterTag}>
                        {letter.toUpperCase()}
                    </Text>
                    <View>
                        {artistList}
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

    artistList: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginLeft: '1rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem'
    }
});

export default ArtistContent;
