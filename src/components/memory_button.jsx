import React, { useContext } from 'react';
import { NumberContext } from './number_provider';

const MemoryButton = () => {

  const { handleRememberValue } = useContext(NumberContext);

  return (
    <button className="button memory" type="button" onClick={handleRememberValue}>
      AC
    </button>
  );
};

export default MemoryButton;