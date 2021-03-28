import React from 'react';
import Display from './dispay';
import ClearButton from './clear_button';
import NumberButton from './number_button';
import FunctionButton from './function_button';
import EqualButton from './equal_button';
import MemoryButton from './memory_button';

const Calculator = () => {

  return (
  <div className="calculator">
    <div className='display'>
      <Display />
    </div>
    <div className='number-pad'>
      <MemoryButton />
      <ClearButton />
      <FunctionButton buttonValue='%' />
      <FunctionButton buttonValue='/' />
      <NumberButton buttonValue={7} />
      <NumberButton buttonValue={8} />
      <NumberButton buttonValue={9} />
      <FunctionButton buttonValue='*' />
      <NumberButton buttonValue={4} />
      <NumberButton buttonValue={5} />
      <NumberButton buttonValue={6} />
      <FunctionButton buttonValue='-' />
      <NumberButton buttonValue={1} />
      <NumberButton buttonValue={2} />
      <NumberButton buttonValue={3} />
      <FunctionButton buttonValue='+' />
      <NumberButton buttonValue='.' />
      <NumberButton buttonValue={0} />
      <div className="equalBlock">
        <EqualButton />
      </div>
    </div>
  </div>
)};

export default Calculator;