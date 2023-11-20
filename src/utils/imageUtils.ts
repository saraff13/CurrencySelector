export const imageMapping: any = [
  {code: 'ARS', src: require('../assets/ARS.png')},
  {code: 'AUD', src: require('../assets/AUD.png')},
  {code: 'CAD', src: require('../assets/CAD.png')},
  {code: 'EUR', src: require('../assets/EUR.png')},
  {code: 'GBP', src: require('../assets/GBP.png')},
  {code: 'HKD', src: require('../assets/HKD.jpeg')},
  {code: 'INR', src: require('../assets/INR.png')},
  {code: 'MYR', src: require('../assets/MYR.png')},
  {code: 'SGD', src: require('../assets/SGD.jpeg')},
  {code: 'USD', src: require('../assets/USD.png')},
];

export const getImageSource = (code: string) => {
  const img = imageMapping.find((item: any) => item?.code === code);
  return img?.src;
};
