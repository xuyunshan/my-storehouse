<template>
  <div class="wrapper" :style="{ backgroundColor: layoutsData.backgroundColor }">
    <Layouts :layouts="layoutsData.render.layouts" :pagekey="layoutsData.pageKey" />
    <HotAreas :hotAreas="layoutsData.render.hotAreas" :pagekey="layoutsData.pageKey" />
    <FixedBottoms :fixedBottoms="layoutsData.render.fixedBottoms" :pagekey="layoutsData.pageKey" />
    <FixedTops :fixedTops="layoutsData.render.fixedTops" :pagekey="layoutsData.pageKey" />
    <FixedElements
      :fixedElements="layoutsData.render.fixedElements"
      :pagekey="layoutsData.pageKey"
    />
    <Swipers :swipers="layoutsData.render.swipers" :pagekey="layoutsData.pageKey" />
    <ImagesToSave :imagesToSave="layoutsData.render.imagesToSave" />
    <PopTextRules :rules="layoutsData.render.textRules" />
    <PopImageRules :rules="layoutsData.render.imageRules" />
    <HorizontalScrolls :hScrolls="layoutsData.render.hScrolls" />
    <VerticalScrolls :vScrolls="layoutsData.render.vScrolls" />
    <Videos :videos="layoutsData.render.videos" />
    <Inputs :inputs="layoutsData.render.inputs" />
    <CopyTexts :copyTexts="layoutsData.render.copyTexts" :pagekey="layoutsData.pageKey" />
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
  data() {
    return {
      layoutsData: { render: {} },
    };
  },
  mounted() {
    window.addEventListener(
      'message',
      (updatedLayout) => {
        this.layoutsData = updatedLayout.data;
      },
      false
    );
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
