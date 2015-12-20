/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  ListView, 
  TouchableHighlight,
  View,
  TextInput,
} = React;

var tictactoe = React.createClass({

  render: function() {
    return (
        <View style={styles.container}>
            <View style={styles.row} > 
                <TextInput style={styles.column} /> 
                <TextInput style={styles.column} /> 
                <TextInput style={styles.column} /> 
            </View>
            <View style={styles.row} >  
                <TextInput style={styles.column} /> 
                <TextInput style={styles.column} /> 
                <TextInput style={styles.column} /> 
            </View>
            <View style={styles.row} >  
                <TextInput style={styles.column} /> 
                <TextInput style={styles.column} /> 
                <TextInput style={styles.column} /> 
            </View>
        </View>
        );  
  },
});

var styles = StyleSheet.create({
  container: {flexWrap: 'wrap'},
  row: {flex:1, flexDirection: 'row'},
  row1: {flex:1,backgroundColor: 'green', flexDirection: 'row'},
  row2: {flex:1,backgroundColor: 'red'},
  row3: {flex:1,backgroundColor: 'blue'},
  column: {flex:1/3},
});
AppRegistry.registerComponent('tictactoe', () => tictactoe);
