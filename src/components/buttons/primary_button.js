import React from 'react';
import {Button} from 'react-native-elements';
import {Colors, Spacing} from '../../styles';

const PrimaryButton = props => (
  <Button
    containerStyle={{width: '100%'}}
    buttonStyle={{
      backgroundColor: Colors.PRIMARY,
      paddingVertical: Spacing.SCALE_16,
    }}
    titleStyle={{
      fontWeight: '600',
    }}
    {...props}
    type={'solid'}
    disabledStyle={{opacity: 0.8, backgroundColor: Colors.PRIMARY}}
  />
);

export default PrimaryButton;
