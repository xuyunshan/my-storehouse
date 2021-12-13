import * as React from 'react';
import PopImageRule from './PopImageRule';

const PopImageRules = (props) => {
  const { rules, pageKey } = props;
  return (
    <div className="PopImageRules">
      {rules.map((rule) => (
        <PopImageRule rule={rule} key={rule.id} pageKey={pageKey} />
      ))}
    </div>
  );
};
export default PopImageRules;
