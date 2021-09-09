import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import { showMessage } from 'react-native-flash-message';
import { connect } from 'react-redux';
import PrimaryButton from '../../components/buttons/primary_button';
import { login } from '../../store/actions/auth';
import { Spacing, STYLE_SHARED } from '../../styles';


class SignIn extends Component {
  state = {
    email: 'example@gmail.com',
    password: 'pass',
  };

  _signIn = async () => {
    try {
      const session = await this.props.login(
        this.state.email,
        this.state.password,
      );

    } catch (error) {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
       <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <Input
          label="Email address"
          placeholder="Enter your email address"
          onChangeText={value => this.setState({email: value})}
          value={this.state.email}
          autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
          clearButtonMode="while-editing"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => {
            this.passwordInput.focus();
          }}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          onChangeText={value => this.setState({password: value})}
          value={this.state.password}
          secureTextEntry={true}
          returnKeyType="done"
          ref={input => {
            this.passwordInput = input;
          }}
          onSubmitEditing={this._signIn}
        />

        <PrimaryButton title="Login" onPress={this._signIn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...STYLE_SHARED.container,
    justifyContent: 'center',
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: Spacing.BOTTOM_SPACE,
  },
  forgotPasswordButton: {
    marginBottom: Spacing.SCALE_18,
  },
});

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
