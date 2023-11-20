import {StyleSheet} from 'react-native';
import {Scaling} from '../../utils';

const CurrencyModalStyles = () =>
  StyleSheet.create({
    main: {
      marginHorizontal: Scaling.hs(32),
      flex: 1,
    },
    modalContainer: {
      flex: 1,
    },
    backIconContainer: {
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'flex-start',
      maxHeight: Scaling.vs(20),
      marginHorizontal: Scaling.hs(16),
    },
    searchBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: Scaling.ms(1),
      marginVertical: Scaling.vs(16),
      paddingBottom: Scaling.vs(8),
      borderColor: 'blue',
    },
    searchBarStyle: {
      width: '90%',
    },
    backArrow: {
      width: Scaling.ms(12),
      height: Scaling.ms(12),
      backgroundColor: 'red',
      borderRadius: Scaling.ms(6),
      margin: Scaling.ms(2),
      marginRight: Scaling.hs(6),
    },
    searchIcon: {
      width: Scaling.ms(16),
      height: Scaling.ms(16),
      borderRadius: Scaling.ms(6),
      margin: Scaling.ms(2),
      marginRight: Scaling.hs(6),
    },
    flatlist: {
      marginTop: Scaling.vs(16),
    },
  });

export default CurrencyModalStyles;
