/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {NativeModules, StyleSheet} from 'react-native';
import MapView from './MapView.js';

const CalendarManager = NativeModules.CalendarManager;

export default class App extends Component<{}> {

  componentWillMount() {
    CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
    CalendarManager.findEvents().then(data => {
      console.log(data);
    }).catch();
  }

  render() {
    return <MapView
        style={{flex: 1}}
        zoomEnabled={false}
    />;

    // return (
    //     <View style={styles.container}>
    //       <Text style={styles.welcome}>
    //         React Native Bridge
    //       </Text>
    //     </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
