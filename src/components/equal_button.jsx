import React, { useContext } from 'react';
import { NumberContext } from './number_provider';

const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button className="equal" type="button" onClick={() => doMath()}>
      =
    </button>
  );
};

export default EqualButton;