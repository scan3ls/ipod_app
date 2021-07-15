import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import SongsButton from './src/songsButton';
import Conent from './src/content';
import request from './src/util';
import AlbumButton from './src/albumButton';
import ArtistButton from './src/artistButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: "hello"
    };
  }

  componentDidMount() {
    // const response = request('albums');
    this.displayContent('Welcome');
  }

  displayContent = (arg) => {
    this.setState({content: arg});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Conent data={this.state.content} />
        </ScrollView>
        <View style={styles.menu}>
          <SongsButton updateDisplay={this.displayContent}/>
          <AlbumButton updateDisplay={this.displayContent}/>
          <ArtistButton updateDisplay={this.displayContent}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '1rem'
  },
  content: {
    marginBottom: '10%'
  },
  menu: {
    height: '10%',
    position: 'fixed',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: 'grey',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default App;
