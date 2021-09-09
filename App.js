import React, {Component} from 'react';
import Navigator from './src/navigation/navigators/';
import {Text, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';

class App extends Component {
  componentDidMount() {
    // SplashScreen.hide();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator />
        <FlashMessage position="top" />
      </View>
    );
  }
}
export default App;
