'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var Main = require('./App/Components/Main');

class tictactoe extends React.Component{
  render() {
    return (
        <NavigatorIOS 
        style={styles.container}
        initialRoute={{
          title: 'Github NoteMaker',
          component: Main
        }}/>
        );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

AppRegistry.registerComponent('tictactoe', () => tictactoe);
