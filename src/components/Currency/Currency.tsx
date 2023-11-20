import React from 'react';
import {Image, Pressable, Text} from 'react-native';
import {ICurrencyProps} from './Currency-interface';
import CurrencyStyles from './Currency-styles';
import {getImageSource} from '../../utils';

const Currency: React.FC<ICurrencyProps> = ({
  currencyCode,
  currencyName,
  onPress,
  ...rest
}) => {
  const styles = CurrencyStyles();
  return (
    <Pressable onPress={onPress} style={styles.main} {...rest}>
      <Image
        style={styles.currencyImage}
        source={getImageSource(currencyCode)}
      />
      <Text style={styles.currencyCode}>{currencyCode}</Text>
      <Text>{currencyName}</Text>
    </Pressable>
  );
};

export default Currency;
