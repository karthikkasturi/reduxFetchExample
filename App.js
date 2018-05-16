/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {connect} from 'react-redux';
import fetchPeopleFromAPI from './actions'

class App extends Component {
  render() {
    console.log('rendering')
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Redux App
        </Text>
        <TouchableHighlight style = {styles.button} onPress = {this.props.getPeople}> 
          <Text style = {styles.buttonText}>
            Fetch stuff!
          </Text>
        </TouchableHighlight>
        {
          this.props.people.isFetching && <Text>Loading</Text>
        } 
        {
          this.props.people.people.length ? (
            this.props.people.people.map((person, index) => {
              return(
                <View key = {index}>
                  <Text>Name: {person.name}</Text>
                </View>
              )
            })
          ): null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    marginTop: 100,
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#0b7eff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  buttonText: {
    color: 'white',
  },
});

function mapStateToProps(state){
  return{
    people: state.people
  }
}

function mapDispatchToProps(dispatch){
  return{
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)