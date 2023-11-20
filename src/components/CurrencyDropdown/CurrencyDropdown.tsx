import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import {ICurrencyDropdownProps} from './CurrencyDropdown-interface';
import CurrencyDropdownStyles from './CurrencyDropdown-styles';
import {getImageSource} from '../../utils';

const CurrencyDropdown: React.FC<ICurrencyDropdownProps> = ({
  currency,
  onPress,
}) => {
  const styles = CurrencyDropdownStyles();
  return (
    <Pressable style={styles.main} onPress={onPress}>
      <Image style={styles.currencyImage} source={getImageSource(currency)} />
      <Text style={styles.currencyText}>{currency}</Text>
      <Image
        style={styles.downArrow}
        source={require('../../assets/down.png')}
      />
    </Pressable>
  );
};

export default CurrencyDropdown;
