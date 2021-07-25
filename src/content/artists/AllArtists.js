import React from 'react';
import {Text, View} from 'react-native';
import ArtistButton from './ArtistButton';
import { sortedAlpha } from '../../util';
import ContentList from '../ContentList';

class ArtistContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: <Text></Text>
        };

    }

    render() {
        const {data, type, updateDisplay} = this.props;
        const alpha = sortedAlpha(data[type]);
        const content = [];

        for (const letter in alpha) {
            if (alpha[letter].length === 0) continue;

            const artistList = alpha[letter].map(
                artist => <ArtistButton key={artist.id} artist={artist} updateDisplay={updateDisplay}/>
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
