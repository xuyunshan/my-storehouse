import { isInWechatMiniprogram } from '@/util/container';
import { navigateToMiniWebview, handleUrl } from '@/util/url';
import Toast from '@/components/toast';

// TODO: useLocation in this file wile be error
// import { useLocation } from '@reach/router';
export const goSomewhere = async (item, channel, pagekey = '') => {
  fireTracking(item, channel, pagekey);
  if ((await isInWechatMiniprogram()) && item.wxLink) {
    navigateToMiniWebview(item.wxLink);
  } else {
    window.location.href = handleUrl(item.link, pagekey);
  }
};
export const genBg = (bg) => {
  if (bg) {
    return { backgroundImage: `url(${bg})` };
  }
};
export const genStyle = (style, { defaultStyle }) => {
  const PERCENTAGE_REG = /^(100|[1-9]?\d(\.\d\d?\d?)?)%$|0$/;
  for (var key in style) {
    // debugger
    if (!isNaN(style[key])) {
      if (key !== 'zIndex') {
        style[key] = `${style[key] / 75}rem`;
      } else {
        style[key] = `${style[key]}`;
      }
    } else if (PERCENTAGE_REG.test(style[key])) {
      var stylePercentage = style[key].replace('%', '');
      style[key] = `${stylePercentage / 10}rem`;
    } else {
      style[key] = `${style[key]}`;
    }
  }
  const a = { ...style, ...defaultStyle };
  return a;
};
export const fireTracking = (item, channel, pagekey = '') => {
  const _czc = global._czc || [];
  if (item.clickTracking) {
    _czc.push([
      '_trackEvent', // required
      pagekey + channel, // pageKey
      'click', // event type
      item.clickTracking, // button name
      '',
      '',
    ]);
  }
};
export const copyToClipboard = (text) => {
  // clipboard would be undefined at !isSecureContext, i.e. non-https env
  window.navigator.clipboard
    .writeText(text)
    .then(() => {
      Toast.info('复制成功');
    })
    .catch(() => {
      Toast.info('当然环境无法复制');
    });
};
