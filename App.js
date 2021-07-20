import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import SongsButton from './src/menu/songsButton';
import Conent from './src/content/content';
import AlbumButton from './src/menu/albumButton';
import ArtistButton from './src/menu/artistButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: "hello",
      contentType: "start"
    };
  }

  componentDidMount() {
    // const response = request('albums');
    this.displayContent('Connecting to API ... Please Wait', "Welcome");
    fetch('https://salty-oasis-19252.herokuapp.com')
    .then(res => {
      if (res.ok) this.displayContent('Connecting to API ... Done', "Welcome");
    }).catch(err => {
      this.displayContent(`Connecting to API ... Error\n${err}`, "Error");
    })
  }

  displayContent = (arg, type) => {
    // console.log('arg', arg);
    this.setState({content: arg, contentType: type});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Conent data={this.state.content} type={this.state.contentType}/>
        </ScrollView>
        <View style={styles.menu}>
          <ArtistButton updateDisplay={this.displayContent}/>
          <SongsButton updateDisplay={this.displayContent}/>
          <AlbumButton updateDisplay={this.displayContent}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'space-between',
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
