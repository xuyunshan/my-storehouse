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
    document.getElementById('TextModalShadow').style.display = 'block';
  };
  const closeModal = () => {
    document.documentElement.style.overflow = 'scroll';
    document.getElementById('___gatsby').style.height = 'auto';
    document.getElementById('TextModalShadow').style.display = 'none';
  };
  return (
    <div className="PopTextRule">
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
      <div id="TextModalShadow" aria-hidden="true" className="RuleShadow">
        <div className="RuleCont">
          <div
            aria-hidden="true"
            onClick={() => {
              closeModal();
            }}
            className="RuleCont__CloseIcon"
          ></div>
          <div className="RuleContainer">
            <div className="RuleContainer__ RuleContainer__Title">{rule.content.title}</div>
            {rule.content.parts.map((item) => (
              <div key={item.id}>
                <div className="RuleContainer__BulletTitle">{item.subTitle}</div>
                {item.texts.map((items) => (
                  <p className="RuleContainer__BulletDesc" key={items}>
                    {items}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="CloseBtn"
            onClick={() => {
              closeModal();
            }}
          >
            关闭
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopTextRule;
