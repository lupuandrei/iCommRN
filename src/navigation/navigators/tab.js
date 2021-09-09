import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import * as screenKeys from '../screen_keys';
import Settings from './settings';



// DRAWER
const Tab = createBottomTabNavigator();
class NavigationTab extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName={screenKeys.STACK_SETTINGS}
      >
        <Tab.Screen
          name={screenKeys.STACK_SETTINGS}
          component={Settings}
          options={{
            title: "My Account",
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default NavigationTab;
