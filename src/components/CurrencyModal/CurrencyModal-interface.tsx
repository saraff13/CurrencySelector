export interface ICurrencyModalProps {
  /*
   * Array of IRenderItemProps
   */
  listData: Array<IRenderItemProps>;

  /*
   * If true, modal will be visible
   */
  visible: boolean;

  /**
   * function that should be called on press of each Item
   */
  onPressItem: (item: IRenderItemProps) => void;

  /**
   * function that should be called on press of back Icon
   */
  onPressBack: () => void;
}

export interface IRenderItemProps {
  /*
   * currency code
   */
  currencyCode: string;

  /*
   * currency name
   */
  currencyName: string;
}
