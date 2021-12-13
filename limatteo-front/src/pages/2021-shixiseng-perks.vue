<template>
  <div class="wrapper">
    <Layouts :layouts="layoutsData.render.layouts" :pagekey="layoutsData.pageKey" />
    <HotAreas :hotAreas="layoutsData.render.hotAreas" :pagekey="layoutsData.pageKey" />
    <FixedBottoms :fixedBottoms="layoutsData.render.fixedBottoms" :pagekey="layoutsData.pageKey" />
    <Swipers :swipers="layoutsData.render.swipers" :pagekey="layoutsData.pageKey" />
    <ImagesToSave :imagesToSave="layoutsData.render.imageToSave" />
    <PopTextRules :rules="layoutsData.render.textRules" />
  </div>
</template>

<script>
import Layouts from '~/components/goblin/Layouts.vue';
import HotAreas from '~/components/goblin/HotAreas.vue';
import FixedBottoms from '~/components/goblin/FixedBottoms.vue';
import Swipers from '~/components/goblin/Swipers.vue';
import ImagesToSave from '~/components/goblin/ImagesToSave.vue';
import PopTextRules from '~/components/goblin/Rule/PopTextRules.vue';
import { layoutsData } from '~/mock/2021-shixiseng-perks';
import axios from 'axios';

export default {
  components: {
    Layouts,
    HotAreas,
    FixedBottoms,
    Swipers,
    ImagesToSave,
    PopTextRules,
  },
  metaInfo: {
    title: layoutsData.title,
    titleTemplate: layoutsData.title,
    meta: [
      { property: 'og:title', content: layoutsData.render.meta.title },
      {
        property: 'og:url',
        content: layoutsData.render.meta.url,
      },
      {
        property: 'og:image',
        content: layoutsData.render.meta.imageUrl,
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
          title: '${layoutsData.render.sharing.title}',
          imageUrl: '${layoutsData.render.sharing.imageUrl}',
          description: '${layoutsData.render.sharing.description}',
          url: '${layoutsData.render.sharing.url}',
        };`,
      },
      {
        vmid: 'extscript',
        key: 'extscript',
        src: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js',
        callback: () => {
          wx.miniProgram.postMessage({
            data: {
              type: 'wechatSharingConfig',
              shareObj: {
                title: `${layoutsData.render.miniprogramSharing.title}`,
                desc: `${layoutsData.render.miniprogramSharing.desc}`,
                path: `${layoutsData.render.miniprogramSharing.url}`,
                imageUrl: `${layoutsData.render.miniprogramSharing.imageUrl}`,
              },
            },
          });
          const wxConfig = axios.get('//api.linkedin-event.com/get_signature', {
            params: {
              reqUrl: location.href,
            },
          });
          console.log('== wechat config params ==', wxConfig.data);
          wx.config({
            debug: true,
            ...wxConfig.data,
            jsApiList: [
              'onMenuShareAppMessage',
              'onMenuShareTimeline',
              'onMenuShareWeibo',
              'onMenuShareQQ',
            ],
          });
          wx.ready(() => {
            // 设置好后，在 ready 函数里调用分享方法，传入设置
            const shareConfig = {
              // 抽取共同的设置
              // imgUrl: this.$context.sharing.imageUrl, //分享卡片的图标，默认当相对路径处理，所以使用绝对路径的的话，“http://”协议前缀必须在。
              imgUrl: `${layoutsData.render.sharing.imageUrl}`,
              desc: `${layoutsData.render.sharing.description}`, //摘要,如果分享到朋友圈的话，不显示摘要。
              title: `${layoutsData.render.sharing.title}`, // 分享卡片标题
              link: `${layoutsData.render.sharing.url}`, // 分享出去后的链接，这里是返回的链接。注意：不能包含 '#' 以及后面的内容！！
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
        },
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'ldjson-schema': ['innerHTML'],
    },
  },
  data() {
    return {
      layoutsData,
    };
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
