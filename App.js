import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SongsButton from './src/menu/songsButton';
import AlbumButton from './src/menu/albumButton';
import ArtistButton from './src/menu/artistButton';
import { request } from './src/util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      content: <Text></Text>,
      contentType: ''
    };

    this.displayContent = this.displayContent.bind(this);
  }

  componentDidMount() {
    const content = <Text>{'Connecting to API ... Please Wait'}</Text>
    this.displayContent(content, "Welcome");
    request()
    .then(res => {
      const content = <Text>{'Connecting to API ... Done'}</Text>
      if (res.ok) this.displayContent(content, "Welcome");
    }).catch(err => {
      const content = <Text>{`Connecting to API ... Error\n${err}`}</Text>
      this.displayContent(content, "Error");
    })
  }

  displayContent = (arg, type) => {
    this.setState({content: arg, contentType: type});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <View>
              <Text style={styles.contentHeader}>{this.state.contentType}</Text>
          </View>
          {this.state.content}
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
    justifyContent: 'space-between',
  },

  content: {
    marginBottom: '20%'
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
  },

  contentHeader: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#8496f8',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    fontSize: '3rem'
  }
});

export default App;
