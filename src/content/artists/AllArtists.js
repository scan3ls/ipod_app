import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ArtistButton from './ArtistButton';
import AlbumButton from '../albums/AlbumButton';
import { sortedAlpha } from '../../util';
import { getAlbums } from './OneArtist';
import ContentList from '../ContentList';

class ArtistContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: <Text></Text>
        };

        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(id) {
        const updateDisplay = this.props.updateDisplay;

        getAlbums(id).then(data =>{
            const content = data.map(
                album => <AlbumButton key={album.id} album={album}/>
            );
            updateDisplay(<View>{content}</View>, `${data[0].artist}`);
        });
    }

    render() {
        const {data, type} = this.props;
        const alpha = sortedAlpha(data[type]);
        const content = [];

        for (const letter in alpha) {
            if (alpha[letter].length === 0) continue;

            const artistList = alpha[letter].map(
                artist => <ArtistButton key={artist.id} artist={artist} handlePress={this.handlePress}/>
            );

            content.push(<ContentList key={letter} list={artistList} letter={letter}/>);
        }

        return (
            <View>
                {content}
            </View>
        );
    }
}

export default ArtistContent;
