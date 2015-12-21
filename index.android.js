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
                <Cell /> 
                <Cell /> 
                <Cell /> 
            </View>
            <View style={styles.row} >  
                <Cell /> 
                <Cell /> 
                <Cell /> 
            </View>
            <View style={styles.row} >  
                <Cell /> 
                <Cell /> 
                <Cell /> 
            </View>
        </View>
        );  
  },
});

var Cell = React.createClass({
  render: function(){
    return (
        <TextInput 
          style={styles.cell} 
          maxLength={1} 
          autoCorrect={false} 
          autoFocus={false} 
        />
        );
  },
});

var styles = StyleSheet.create({
  container: {flexWrap: 'wrap'},
  row: {flex:1, flexDirection: 'row'},
  cell: {flex:1/3},
});
AppRegistry.registerComponent('tictactoe', () => tictactoe);
