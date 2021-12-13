import * as React from 'react';
import { genStyle } from './utils/common';
import { COPY_TEXT } from './utils/constants';
import { copyToClipboard } from './utils/common';
import '@/style/common.scss';
const copyTexts = (props) => {
  const { copyTexts } = props;
  return (
    <div className="copyTexts">
      {copyTexts.map((copyText) => (
        <div className="HotArea" style={genStyle(copyText.style, COPY_TEXT)} key={copyText.id}>
          <div className="HotArea__Area">
            <button
              aria-hidden="true"
              onClick={() => {
                copyToClipboard(copyText.value);
              }}
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default copyTexts;
