import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class ContentList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {list, letter} = this.props;

        return (
            <View key={letter}>
                <Text style={styles.letterTag}>
                    {letter.toUpperCase()}
                </Text>
                <View>
                    {list}
                </View>
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
});

export default ContentList;
