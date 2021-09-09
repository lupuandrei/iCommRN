import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import Settings from '../../features/settings';
import * as screenKeys from '../screen_keys';


// STACK
const Stack = createStackNavigator();
class NavigationStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={screenKeys.SETTINGS_MAIN}>
        <Stack.Screen
          name={screenKeys.SETTINGS_MAIN}
          component={Settings}
          options={{
            title: "My Account",
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default NavigationStack;
