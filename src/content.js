import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text>{this.props.data}</Text>
        );
    }
}

export default Content;
