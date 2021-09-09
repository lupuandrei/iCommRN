import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import SignIn from '../../features/sign_in';
import Welcome from '../../features/welcome';
import * as screenKeys from '../screen_keys';

// STACK
const Stack = createStackNavigator();
class NavigationStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={screenKeys.WELCOME}>
        <Stack.Screen
          name={screenKeys.WELCOME}
          component={Welcome}
          options={{
            header: () => {
              return null;
            },
            headerTitle: null,
          }}
        />

        <Stack.Screen
          name={screenKeys.SIGN_IN}
          component={SignIn}
          options={{title: "Login"}}
        />
      </Stack.Navigator>
    );
  }
}

export default NavigationStack;
