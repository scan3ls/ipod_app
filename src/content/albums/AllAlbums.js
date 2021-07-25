import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { sortedAlpha } from '../../util';
import AlbumButton from './AlbumButton';
import ContentList from '../ContentList';

class AllAlbums extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, type, updateDisplay} = this.props;
        const alpha = sortedAlpha(data[type]);
        const content = [];

        for (const letter in alpha) {
            if (alpha[letter].length === 0) continue;

            const albumList = alpha[letter].map(
                (album) => <AlbumButton key={album.id} album={album}/>
            );

            content.push(<ContentList key={letter} list={albumList} letter={letter}/>);
        }

        return (
            <View>{content}</View>
        );
    }
}

export default AllAlbums;
