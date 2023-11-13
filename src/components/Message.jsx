import React from 'react';

const Message = ({ moneyAvailable, price, name, calculatedAmountLeft }) => {
  const hasEnoughMoney = moneyAvailable >= price;

  return (
    <div className="bg-white p-8 rounded shadow-md">
      {hasEnoughMoney ? (
        <p className="text-green-500">
          Success! The remaining amount of money for {name} is: {calculatedAmountLeft}. Thank you!
        </p>
      ) : (
        <p className="text-red-500">
          Failure! The bank account balance for {name} is: {moneyAvailable}. Unfortunately, you need to pay: {price}.
        </p>
      )}
    </div>
  );
};

export default Message;
