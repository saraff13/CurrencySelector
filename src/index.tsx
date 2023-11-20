import React, {useState} from 'react';
import Home from './screens';
import {Loader} from './components/';

export const GlobalContext = React.createContext({
  loaderVisible: false,
  showLoader: (_value: boolean) => {},
});

const CurrencySelector = () => {
  const showLoader = (value: boolean) => {
    setGloablState((state: any) => ({
      ...state,
      loaderVisible: value,
    }));
  };

  const [globalState, setGloablState] = useState({
    loaderVisible: false,
    showLoader,
  });

  return (
    <GlobalContext.Provider value={globalState}>
      <Home />
      <Loader visible={globalState.loaderVisible} />
    </GlobalContext.Provider>
  );
};

export default CurrencySelector;
