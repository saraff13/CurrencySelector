import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import HomeStyles from './styles';
import CurrencyDropdown from '../../components/CurrencyDropdown/CurrencyDropdown';
import CurrencyModal from '../../components/CurrencyModal/CurrencyModal';
import {IRenderItemProps} from '../../components/CurrencyModal/CurrencyModal-interface';
import {GlobalContext} from '../..';

let apiData: any = {};
let sourceCurrencyData: any = [];
let destinationCurrencyData: any = [];

const Home = () => {
  const [sourceCurrency, setSourceCurrency] = useState<IRenderItemProps>({
    currencyCode: '',
    currencyName: '',
  });
  const [destinationCurrency, setDestinationCurrency] =
    useState<IRenderItemProps>({
      currencyCode: '',
      currencyName: '',
    });
  const [sourceCurrencyModalVisible, setSourceCurrencyModalVisible] =
    useState(false);
  const [destCurrencyModalVisible, setDestCurrencyModalVisible] =
    useState(false);

  const styles = HomeStyles();
  const globalValue = useContext(GlobalContext);
  const {showLoader} = globalValue;

  const fetchCurrencies = () => {
    showLoader(true);
    fetch(
      'https://www.instarem.com/api/v1/public/currency/pair?source_currency=AUD,HKD,MYR,SGD,USD,EUR,INR,GBP,CAD',
    )
      .then(response => response.json())
      .then((res: any) => {
        for (const key in res?.data) {
          sourceCurrencyData.push({
            currencyCode: res.data[key][0]?.source_currency_code,
            currencyName: res.data[key][0]?.source_currency_name,
          });
        }
        apiData = res?.data;
        setSourceCurrency(sourceCurrencyData[0]);
      })
      .catch(error => console.log('error => ', error))
      .finally(() => showLoader(false));
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const getDestinationCurrencyData = (
    currency: IRenderItemProps,
    data: any,
  ) => {
    if (data.hasOwnProperty(currency?.currencyCode)) {
      let newDestCurrencyData = [];
      for (const obj of data[currency?.currencyCode]) {
        newDestCurrencyData.push({
          currencyCode: obj?.destination_currency_code,
          currencyName: obj?.destination_currency_name,
        });
      }
      destinationCurrencyData = newDestCurrencyData;
      setDestinationCurrency(newDestCurrencyData[0]);
    }
  };

  useEffect(() => {
    getDestinationCurrencyData(sourceCurrency, apiData);
  }, [sourceCurrency]);

  const onPressSourceCurrencyCallback = (item: IRenderItemProps) => {
    setSourceCurrency(item);
    setSourceCurrencyModalVisible(false);
  };

  const onPressDestinationCurrencyCallback = (item: IRenderItemProps) => {
    setDestinationCurrency(item);
    setDestCurrencyModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.currencyContainer}>
        <CurrencyDropdown
          currency={sourceCurrency?.currencyCode}
          onPress={() => setSourceCurrencyModalVisible(true)}
        />
        <CurrencyDropdown
          currency={destinationCurrency?.currencyCode}
          onPress={() => setDestCurrencyModalVisible(true)}
        />
      </View>
      <CurrencyModal
        visible={sourceCurrencyModalVisible}
        onPressItem={onPressSourceCurrencyCallback}
        listData={sourceCurrencyData}
        onPressBack={() => setSourceCurrencyModalVisible(false)}
      />
      <CurrencyModal
        visible={destCurrencyModalVisible}
        onPressItem={onPressDestinationCurrencyCallback}
        listData={destinationCurrencyData}
        onPressBack={() => setDestCurrencyModalVisible(false)}
      />
    </SafeAreaView>
  );
};

export default Home;
