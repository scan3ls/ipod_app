import React from 'react';
import { View } from 'react-native';
import { sortedAlpha } from '../../util';
import SongButton from './SongButton';
import ContentList from '../ContentList';

class SongContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data, type, updateDisplay} = this.props;
        const alpha = sortedAlpha(data[type]);
        const content = [];

        for (const letter in alpha) {
            if (alpha[letter].length === 0) continue;

            const songList = alpha[letter].map(
                song => <SongButton key={song.id} song={song}/>
            );

            content.push(<ContentList key={letter} list={songList} letter={letter}/>);
        }

        return (
            <View>
                {content}
            </View>
        );
    }
}

export default SongContent;
