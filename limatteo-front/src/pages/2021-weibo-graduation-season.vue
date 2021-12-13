<template>
  <div class="weibo-graduation-season">
    <Layouts :layouts="layoutsData.render.layouts" :pagekey="layoutsData.pageKey" />
    <HotAreas :hotAreas="layoutsData.render.hotAreas" :pagekey="layoutsData.pageKey" />
  </div>
</template>
<script>
import Layouts from '~/components/goblin/Layouts.vue';
import { layoutsData } from '~/mock/2021-weibo-graduation-season';
import HotAreas from '~/components/goblin/HotAreas.vue';

export default {
  name: 'overseas',
  components: {
    Layouts,
    HotAreas
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
          title: '${layoutsData.render.sharing.title}',
          imageUrl: '${layoutsData.render.sharing.imageUrl}',
          description: '${layoutsData.render.sharing.description}',
          url: '${layoutsData.render.sharing.url}',
        };`,
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
