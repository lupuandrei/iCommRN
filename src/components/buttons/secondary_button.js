import React from 'react';
import {Button} from 'react-native-elements';
import {Colors} from '../../styles';

const SecondaryButton = props => (
  <Button containerStyle={{width: '100%'}} {...props} type={'clear'} />
);

export default SecondaryButton;
