import React, { useContext } from 'react';
import { NumberContext } from './number_provider';

const Display = () => {

  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
    <div>
      <h2>
        {!number.length && !storedNumber ? '0' : number || storedNumber}
      </h2>
      <p className="secondDisplay">
        {!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}
      </p>
    </div>
  );
};

export default Display;