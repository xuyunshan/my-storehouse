import callApp from '@/util/call-app/index';
import Vue from 'vue';
import { isZephyrIOSDevice, isZephyrAndroidDevice, isInWechatMiniprogram } from '@/util/container';
import { navigateToMiniWebview, handleUrl } from '@/util/url';
export default {
  data() {
    return {};
  },
  methods: {
    fireTracking(item) {
      const channel = this.$route.query.trk || '';
      if (item.clickTracking) {
        _czc.push([
          '_trackEvent', // required
          this.pagekey + channel, // pageKey
          'click', // event type
          item.clickTracking, // button name
          '',
          '',
        ]);
      }
    },
    goSomewhere(item) {
      this.fireTracking(item);
      isInWechatMiniprogram().then((inMiniProgram) => {
        if (inMiniProgram && item.wxLink) {
          navigateToMiniWebview(item.wxLink);
        } else {
          location.href = handleUrl(item.link, this.pagekey);
        }
      });
    },
    genBg(bg) {
      if (bg) {
        return `background-image: url("${bg}")`;
      }
    },
    genStyle(style) {
      const PERCENTAGE_REG = /^(100|[1-9]?\d(\.\d\d?\d?)?)%$|0$/;
      return this.styleCandidates.reduce((a, b) => {
        if (style[b]) {
          if (!isNaN(style[b])) {
            if (b !== 'z-index') {
              return a.concat(`${b}:${style[b] / 75}rem;`);
            } else {
              return a.concat(`${b}:${style[b]};`);
            }
          } else if (PERCENTAGE_REG.test(style[b])) {
            var stylePercentage = style[b].replace('%', '');
            return a.concat(`${b}:${stylePercentage / 10}rem;`);
          } else {
            return a.concat(`${b}:${style[b]};`);
          }
        }
        return a;
      }, this.defaultStyle);
    },
    copyToClipboard(text) {
      // clipboard would be undefined at !isSecureContext, i.e. non-https env
      window.navigator.clipboard
        .writeText(text)
        .then(() => {
          Vue.prototype.$toast('复制成功');
        })
        .catch(() => {
          Vue.prototype.$toast('当然环境无法复制');
        });
    },
  },
};
