import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PrimaryButton from '../../components/buttons/primary_button';
import { SIGN_IN } from '../../navigation/screen_keys';
import { Colors, Spacing } from '../../styles';
import LoginButton from './components/login_button';


export class Welcome extends Component {
  _navigateSignUp = () => {
    // this.props.navigation.navigate(SIGN_UP);
  };

  _navigateSignIn = () => {
    this.props.navigation.navigate(SIGN_IN);
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title="Sign up"
            onPress={this._navigateSignUp}
          />

          <LoginButton
            onPress={this._navigateSignIn}
            style={styles.loginButton}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Spacing.SCALE_18,
    backgroundColor: Colors.WHITE,
  },
  loginButton: {
    marginTop: Spacing.SCALE_8,
  },
  paginationContainer: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  buttonsContainer: {
    flex: 0.2,
    justifyContent: 'center',
    paddingHorizontal: Spacing.SCALE_8,
  },
});

export default Welcome;
