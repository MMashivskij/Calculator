import React, { useContext } from 'react';
import { NumberContext } from './number_provider';

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button className="button clearBlock" type="button" onClick={() => handleClearValue()}>
      <img className="clear" src="./images/clear.png" alt="clear"/>
    </button>
  );
};

export default ClearButton;