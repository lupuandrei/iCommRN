import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import Bag from '../../features/bag';
import * as screenKeys from '../screen_keys';

// STACK
const Stack = createStackNavigator();
class NavigationStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={screenKeys.BAG_MAIN}>
        <Stack.Screen
          name={screenKeys.BAG_MAIN}
          component={Bag}
          options={{
            title: 'Bag',
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default NavigationStack;
