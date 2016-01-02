var React = require('react-native');

var { 
  Text,
  View, 
  StyleSheet,
  TextInput,
  ActivityIndicatorIOS,
  TouchableHighlight
} = React;

var Dashboard = require('../Components/Dashboard')
class Main extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      userName: '',
      isLoading: false,
      error: false
    }
  };

  handleChange(event){
     this.setState({
        userName: event.nativeEvent.text
     })
  };

  handleSubmit(){
     this.setState({
        isLoading: true,
        userName: 'Cleared'
     });
     this.props.navigator.push({
        title: 'Dashboard',
        component: Dashboard,
        passProps: { userInfo: 'deepak'}
     });
  };

  render(){
    return(
        <View 
          style={styles.mainContainer}>
            <Text 
               style={styles.title}> 
               Search for Github User  </Text>
            <TextInput 
              value={this.state.userName}
              onChange={this.handleChange.bind(this)}
              style={styles.searchInput} />
            <TouchableHighlight 
              onPress={this.handleSubmit.bind(this)}
              style={styles.button}
              underlayColor="white">
                  <Text
                  style={styles.buttonText} > 
                    Search 
                  </Text>
            </TouchableHighlight>
           <ActivityIndicatorIOS 
              animating={this.state.isLoading} 
              size="large"
              color="#111"> 
            </ActivityIndicatorIOS>
        </View>
        )
  }
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#48BBEC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 35,
    marginTop: 65
  },
  title:{
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 45,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    color: 'white',
    borderRadius: 8,
    borderColor: 'white'
  },
  button:{
    flexDirection: 'row',
    height: 45,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText:{
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  }
});

module.exports = Main;
