import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import PrimaryButton from '../../components/buttons/primary_button';
import {SIGN_IN} from '../../navigation/screen_keys';
import {Colors, Spacing} from '../../styles';
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
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <PrimaryButton
            title="Sign up"
            onPress={this._navigateSignUp}
            disabled
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
  logoContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '80%',
    height: 100,
    marginBottom: Spacing.BOTTOM_SPACE,
  },
  loginButton: {
    marginTop: Spacing.SCALE_8,
  },
  buttonsContainer: {
    flex: 0.2,
    justifyContent: 'center',
    paddingHorizontal: Spacing.SCALE_8,
  },
});

export default Welcome;
