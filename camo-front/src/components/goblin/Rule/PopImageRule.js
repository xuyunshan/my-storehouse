import * as React from 'react';
import { genStyle, genBg, fireTracking } from '../utils/common';
import { POP_RULE_ENTRANCE } from '../utils/constants';
import { useLocation } from '@reach/router';
import '@/style/common.scss';
import '@/style/PopRule.scss';

const PopTextRule = (props) => {
  const { rule, pageKey } = props;
  const Location = useLocation();
  const channel = new URLSearchParams(Location.search).get('trk');
  const openModal = (entrance) => {
    fireTracking(entrance, channel, pageKey);
    document.documentElement.style.overflow = 'hidden';
    document.getElementById('___gatsby').style.height = '100%';
    document.getElementById('ImageModalShadow').style.display = 'block';
  };
  const closeModal = () => {
    document.documentElement.style.overflow = 'scroll';
    document.getElementById('___gatsby').style.height = 'auto';
    document.getElementById('ImageModalShadow').style.display = 'none';
  };
  return (
    <div className="PopImageRule">
      <div
        aria-hidden="true"
        className="Entrance"
        onClick={() => {
          openModal(rule.entrance);
        }}
        style={{
          ...genStyle(rule.entrance.style, POP_RULE_ENTRANCE),
          ...genBg(rule.entrance.bgStyle),
        }}
      ></div>
      <div id="ImageModalShadow" aria-hidden="true" className="RuleShadow">
        <div className="RuleCont" style={genStyle(rule.content.style, POP_RULE_ENTRANCE)}>
          <img src={rule.entrance.bgStyle} alt="" />
          <div
            aria-hidden="true"
            onClick={() => {
              closeModal();
            }}
            className="RuleCont__CloseIcon"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default PopTextRule;
