import React, { useState, useEffect } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [inMemory, setInMemory] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');

  useEffect(() => {
    const onKeypress = e => {
      e.preventDefault();
      if(e.key.match(/[0-9]/)) {
        handleSetDisplayValue(e.key);
      } 
      if (e.key === '+' || 
          e.key === '-' || 
          e.key === '*' || 
          e.key === '/' || 
          e.key === '%') {
        handleSetCalcFunction(e.key)
      }
      if(e.key === 'Enter') {
        doMath();
      }
    };
  
    document.addEventListener('keypress', onKeypress, false);
  
    return () => {
      document.removeEventListener('keypress', onKeypress);
    };
  }, [functionType]);

  const handleSetDisplayValue = num => {
    if ((!number.includes('.') || num !== '.')) {
      setNumber(`${(number + num)}`);
    }
  };

  const handleRememberValue = () => {
    if(inMemory) {
      handleSetDisplayValue(inMemory);
    } else {
      setInMemory(number);
    }
  }

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const handleSetCalcFunction = type => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '/':
          if(number == 0) {
            alert("It is impossible to divide by zero")
            break;
          }
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
          break;
        case '%':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) / 100 * parseFloat(number) * 1000}`) / 1000}`)
        default:
          break;
      }
      setNumber('');
      setFunctionType('');
    }
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleClearValue,
        handleRememberValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleToggleNegative,
        number,
        storedNumber,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;