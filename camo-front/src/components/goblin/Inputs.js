import * as React from 'react';
import { genStyle } from './utils/common';
import { INPUT } from './utils/constants';
import '@/style/Input.scss';

const Inputs = (props) => {
  const { inputs } = props;
  return (
    <div className="Inputs">
      {inputs.map((input) => (
        <input
          type="text"
          key={input.id}
          style={genStyle(input.style, INPUT)}
          value={input.value}
          disabled
        />
      ))}
    </div>
  );
};

export default Inputs;
