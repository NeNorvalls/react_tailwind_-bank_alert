import React from 'react';
import Message from '../components/Message';
import data from '../data/appData';

const AppProps = () => {
  const { moneyAvailable, price, name } = data;
  const calculatedAmountLeft = moneyAvailable - price;

  return (
    <Message
      moneyAvailable={moneyAvailable}
      price={price}
      name={name}
      calculatedAmountLeft={calculatedAmountLeft}
    />
  );
};

export default AppProps;
