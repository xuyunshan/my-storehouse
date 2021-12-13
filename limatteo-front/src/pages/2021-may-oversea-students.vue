<template>
  <div class="oversea-student">
    <Layouts :layouts="layoutsData.render.layouts" :pagekey="layoutsData.pageKey" />
    <HotAreas :hotAreas="layoutsData.render.hotAreas" :pagekey="layoutsData.pageKey" />
    <FixedBottoms :fixedBottoms="layoutsData.render.fixedBottoms" :pagekey="layoutsData.pageKey" />
    <Swipers :swipers="layoutsData.render.swipers" :pagekey="layoutsData.pageKey" />
    <ImagesToSave :imagesToSave="layoutsData.render.imagesToSave" />
  </div>
</template>
<script>
import Layouts from '~/components/goblin/Layouts.vue';
import HotAreas from '~/components/goblin/HotAreas.vue';
import FixedBottoms from '~/components/goblin/FixedBottoms.vue';
import Swipers from '~/components/goblin/Swipers.vue';
import ImagesToSave from '~/components/goblin/ImagesToSave.vue';
import { layoutsData } from '~/mock/oversea_student';

export default {
  name: 'overseas',
  components: {
    Layouts,
    HotAreas,
    FixedBottoms,
    Swipers,
    ImagesToSave,
  },
  metaInfo: {
    title: '向往的行业 领英海外专场',
    titleTemplate: '向往的行业 领英海外专场',
    meta: [
      { property: 'og:title', content: '向往的行业 领英海外专场' },
      {
        property: 'og:url',
        content: 'https://www.linkedin-event.com/campaign/2021-may-oversea-students/',
      },
      {
        property: 'og:image',
        content: '',
      },
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
        innerHTML: `window.__pageSharingConfig = {
          title: '向往的行业 领英海外专场',
          imageUrl: 'https://www.linkedin-event.com/image/onboarding-guide/share.jpeg',
          description: '',
          url: 'https://www.linkedin-event.com/campaign/2021-may-oversea-students/?trk=share',
        };`,
      },
      {
        vmid: 'extscript',
        src: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js',
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'ldjson-schema': ['innerHTML'],
    },
  },
  mounted() {
    const _czc = _czc || [];
    _czc.push(['_setAccount', '1277901282']);
  },
  data() {
    return {
      layoutsData,
    };
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
.oversea-student {
  width: 100%;
  height: auto;
  background: #4f6ab4;
}
</style>
