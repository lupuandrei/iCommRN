import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import ShopMenu from '../../features/shop_menu';
import * as screenKeys from '../screen_keys';

// STACK
const Stack = createStackNavigator();
class NavigationStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={screenKeys.SHOP_MENU}>
        <Stack.Screen
          name={screenKeys.SHOP_MENU}
          component={ShopMenu}
          options={{
            title: 'Shop',
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default NavigationStack;
