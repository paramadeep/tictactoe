var React = require('react-native');

var { 
  Text,
  Image,
  View, 
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;



class Dashboard extends React.Component{
  gotToProfile(){
    
  };

  makeBackground(){
    return {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'stretch',
      flex:1,
      backgroundColor: 'red'
    };
  };

  render(){
    return (
        <View style={styles.mainContainer}>
          <Text> {this.props.userInfo} </Text>
          <Image source={{uri:"/Users/D/Pictures/Ladakh_EN-IN10118111257_1920x1080.jpg" }} 
            style={styles.image}/>
          <TouchableHighlight
            style={this.makeBackground()}
            onPress={this.gotToProfile.bind(this)}
            underlayColor='#88D4F5'> 
              <Text style={{ alignSelf: 'center'}}> User Info </Text>
          </TouchableHighlight> 
          <TouchableHighlight
            style={this.makeBackground()}
            onPress={this.gotToProfile.bind(this)}
            underlayColor='#88D4F5'> 
              <Text style={{ alignSelf: 'center'}}> User Repos </Text>
          </TouchableHighlight> 
       </View>
        );
  }
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#48BBEC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 65
  },
  userInfoButtom: {
  },
  profileInfoButton: {

  },
  image:{
    height: 350
  }
});

module.exports = Dashboard;
