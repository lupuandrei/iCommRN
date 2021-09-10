import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import * as screenKeys from '../screen_keys';
import Settings from './settings';
import Shop from './shop';
import Bag from './bag';

const Tab = createBottomTabNavigator();
class NavigationTab extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName={screenKeys.STACK_SHOP}
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name={screenKeys.STACK_SHOP}
          component={Shop}
          options={{
            title: 'Shop',
          }}
        />

        <Tab.Screen
          name={screenKeys.STACK_BAG}
          component={Bag}
          options={{
            title: 'Bag',
          }}
        />
        <Tab.Screen
          name={screenKeys.STACK_SETTINGS}
          component={Settings}
          options={{
            title: 'My Account',
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default NavigationTab;
