import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Strong from '../../../components/strong';
import {Colors} from '../../../styles';

const LoginButton = props => {
  return (
    <TouchableOpacity {...props}>
      <Text style={styles.text}>
      Already registered? <Strong>Login</Strong>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    width: '100%',
    textAlign: 'center',
    color: Colors.BLACK,
  },
});

export default LoginButton;
