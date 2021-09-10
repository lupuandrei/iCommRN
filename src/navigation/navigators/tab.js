import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import * as screenKeys from '../screen_keys';
import Settings from './settings';
import Shop from './shop';
import Bag from './bag';
import {Icon} from 'react-native-elements/dist/icons/Icon';

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
            tabBarIcon: () => {
              return <Icon name="home"></Icon>;
            },
          }}
        />

        <Tab.Screen
          name={screenKeys.STACK_BAG}
          component={Bag}
          options={{
            title: 'Bag',
            tabBarIcon: () => {
              return <Icon name="shopping-bag"></Icon>;
            },
          }}
        />
        <Tab.Screen
          name={screenKeys.STACK_SETTINGS}
          component={Settings}
          options={{
            title: 'My Account',
            tabBarIcon: () => {
              return <Icon name="person"></Icon>;
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}

export default NavigationTab;
