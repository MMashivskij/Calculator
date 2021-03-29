import React, { useContext } from 'react';
import { NumberContext } from './number_provider';

const Display = () => {

  const { number, storedNumber, functionType, result } = useContext(NumberContext);
  return (
    <div>
      <h2>
      {result ? result : !storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}
      </h2>
      <p className="secondDisplay">
      {!number.length && !storedNumber ? '0' : number || storedNumber}
      </p>
    </div>
  );
};

export default Display;