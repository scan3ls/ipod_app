import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AlbumContent from './AlbumContent';
import SongContent from './SongContent';
import ArtistContent from './ArtistContent';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.data[this.props.type]
        const choose = (type) => {
            switch (type) {
                case "Albums":
                    return <AlbumContent data={data}/>;

                case "Songs":
                    return <SongContent data={data} />;

                case "Artists":
                    return <ArtistContent data={data} />;

                default:
                    return <Text>{this.props.data}</Text>;
            }
        };
        return (
            <View>
                <View>
                    <Text style={styles.contentHeader}>{this.props.type}</Text>
                </View>
                <View>
                    {choose(this.props.type)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contentHeader: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#8496f8',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        fontSize: '3rem'
    }
});

export default Content;
