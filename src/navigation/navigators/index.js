import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
;import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { createLoadingSelector } from '../../store/selectors/loading';
import { GLOBAL_LOADING } from '../../store/types';
import {
  STACK_MAIN_APP,
  STACK_MAIN_AUTH
} from '../screen_keys';
import AuthStack from './auth';
import TabStack from './tab';


// ROOT STACK
const Stack = createStackNavigator();
class NavigationStack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Spinner visible={this.props.isFetching} textContent={'Loading ...'} />

        <Stack.Navigator headerMode="none">
          {this.props.session.accessToken ? (
              <Stack.Screen
                name={STACK_MAIN_APP}
                component={TabStack}
                options={{
                  animationEnabled: false,
                }}
              />
            ) : (
            <Stack.Screen
              name={STACK_MAIN_AUTH}
              component={AuthStack}
              options={{
                animationEnabled: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const loadingSelector = createLoadingSelector(GLOBAL_LOADING);

const mapStateToProps = state => {
  return {
    session: state.authReducer.session,
    isFetching: loadingSelector(state),
  };
};

export default connect(
  mapStateToProps,
  {},
)(NavigationStack);
