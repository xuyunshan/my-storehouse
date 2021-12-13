import * as React from 'react';
import PopTextRule from './PopTextRule';

const PopTextRules = (props) => {
  const { rules, pageKey } = props;
  return (
    <div className="PopTextRules">
      {rules.map((rule) => (
        <PopTextRule rule={rule} key={rule.id} pageKey={pageKey} />
      ))}
    </div>
  );
};
export default PopTextRules;
