<template>
  <div class="wrapper" :style="{ backgroundColor: $context.backgroundColor }">
    <Layouts :layouts="$context.render.layouts" :pagekey="$context.pageKey" />
    <HotAreas :hotAreas="$context.render.hotAreas" :pagekey="$context.pageKey" />
    <FixedBottoms :fixedBottoms="$context.render.fixedBottoms" :pagekey="$context.pageKey" />
    <FixedTops :fixedTops="$context.render.fixedTops" :pagekey="$context.pageKey" />
    <FixedElements :fixedElements="$context.render.fixedElements" :pagekey="$context.pageKey" />
    <Swipers :swipers="$context.render.swipers" :pagekey="$context.pageKey" />
    <ImagesToSave :imagesToSave="$context.render.imagesToSave" />
    <PopTextRules :rules="$context.render.textRules" />
    <PopImageRules :rules="$context.render.imageRules" />
    <HorizontalScrolls :hScrolls="$context.render.hScrolls" :pagekey="$context.pageKey" />
    <VerticalScrolls :vScrolls="$context.render.vScrolls" :pagekey="$context.pageKey"/>
    <Videos :videos="$context.render.videos" :pagekey="$context.pageKey"/>
    <Inputs :inputs="$context.render.inputs" />
    <CopyTexts :copyTexts="$context.render.copyTexts" />
  </div>
</template>

<script>
import Layouts from '~/components/goblin/Layouts.vue';
import HotAreas from '~/components/goblin/HotAreas.vue';
import FixedBottoms from '~/components/goblin/FixedBottoms.vue';
import FixedTops from '~/components/goblin/FixedTops.vue';
import FixedElements from '~/components/goblin/FixedElements.vue';
import Swipers from '~/components/goblin/Swipers.vue';
import ImagesToSave from '~/components/goblin/ImagesToSave.vue';
import PopTextRules from '~/components/goblin/Rule/PopTextRules.vue';
import PopImageRules from '~/components/goblin/Rule/PopImageRules.vue';
import HorizontalScrolls from '~/components/goblin/Scroll/HorizontalScrolls.vue';
import VerticalScrolls from '~/components/goblin/Scroll/VerticalScrolls.vue';
import Videos from '~/components/goblin/Videos.vue';
import Inputs from '~/components/goblin/Inputs.vue';
import CopyTexts from '~/components/goblin/CopyTexts.vue';

import axios from 'axios';
import { isInWechatMiniprogram, isInWechatApp } from '@/util/container';

const EVENT_HTTP_PREFIX = 'https://www.linkedin-event.com/campaign';

export default {
  components: {
    Layouts,
    HotAreas,
    FixedBottoms,
    FixedTops,
    FixedElements,
    Swipers,
    ImagesToSave,
    PopTextRules,
    PopImageRules,
    HorizontalScrolls,
    VerticalScrolls,
    Videos,
    Inputs,
    CopyTexts,
  },
  metaInfo() {
    return {
      title: this.$context.title,
      titleTemplate: this.$context.title,
      meta: [
        { property: 'og:title', content: this.$context.render.meta.title },
        {
          property: 'og:url',
          content: `${EVENT_HTTP_PREFIX}${this.$route.fullPath}`,
        },
        {
          property: 'og:image',
          content: this.$context.render.meta.imageUrl,
        },
        // {
        //   name: 'viewport',
        //   content: 'initial-scale=1,maximum-scale=1.0, minimum-scale=1.0',
        // },
      ],
      script: [
        {
          vmid: 'cnzz',
          key: 'cnzz',
          src: 'https://s4.cnzz.com/z_stat.php?id=1277901282&web_id=1277901282',
          body: true,
        },
        {
          vmid: 'ldjson-schema',
          key: 'ldjson-schema',
          innerHTML: `window.__pageSharingConfig = {
            title: '${this.$context.render.sharing.title}',
            imageUrl: '${this.$context.render.sharing.imageUrl}',
            description: '${this.$context.render.sharing.description}',
            url: '${EVENT_HTTP_PREFIX}${this.$route.fullPath}',
          };`,
        },
        {
          vmid: 'extscript',
          key: 'extscript',
          src: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js',
          callback: async () => {
            if (await isInWechatMiniprogram()) {
              wx.miniProgram.postMessage({
                data: {
                  type: 'wechatSharingConfig',
                  shareObj: {
                    title: `${this.$context.render.miniprogramSharing.title}`,
                    desc: `${this.$context.render.miniprogramSharing.desc}`,
                    path: `${EVENT_HTTP_PREFIX}${this.$route.fullPath}`,
                    imageUrl: `${this.$context.render.miniprogramSharing.imageUrl}`,
                  },
                },
              });
            }
            if (isInWechatApp()) {
              const wxConfig = await axios.get('//api.linkedin-event.com/get_signature', {
                params: {
                  reqUrl: location.href,
                },
              });
              console.log('== wechat config params ==', wxConfig.data);
              wx.config({
                // debug: true,
                ...wxConfig.data,
                jsApiList: [
                  'updateAppMessageShareData',
                  'updateTimelineShareData',
                  'onMenuShareWeibo',
                ],
              });
              wx.ready(() => {
                const shareConfig = {
                  imgUrl: `${this.$context.render.sharing.imageUrl}`, //分享卡片的图标，默认当相对路径处理，所以使用绝对路径的的话，“http://”协议前缀必须在。
                  desc: `${this.$context.render.sharing.description}`, //摘要,如果分享到朋友圈的话，不显示摘要。
                  title: `${this.$context.render.sharing.title}`, // 分享卡片标题
                  link: `${EVENT_HTTP_PREFIX}${this.$route.fullPath}`, // 分享出去后的链接，这里是返回的链接。注意：不能包含 '#' 以及后面的内容！！
                  success: function () {
                    // 分享成功后的回调函数
                  },
                  cancel: function () {
                    // 用户取消分享后执行的回调函数
                  },
                  // 还有其他几种回调函数，详见官网文档
                };
                // 分享给朋友及分享到QQ按钮的分享内容
                wx.updateAppMessageShareData(shareConfig);
                // 分享到朋友圈及分享到QQ空间按钮的分享内容
                wx.updateTimelineShareData(shareConfig);
                // 分享到腾讯微博的分享内容
                wx.onMenuShareWeibo(shareConfig);
              });
            }
          },
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'ldjson-schema': ['innerHTML'],
      },
    };
  },
  data() {
    return {};
  },
  mounted() {
    const _czc = _czc || [];
    _czc.push(['_setAccount', '1277901282']);
  },
};
</script>

<style lang="scss" scoped>
* {
  /* TODO: 暂时使用这种办法，之后会放在layouts.vue */
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
}

.wrapper {
  width: 100%;
  height: auto;
}
</style>
