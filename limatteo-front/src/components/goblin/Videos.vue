<template>
  <div class="goblin-videos">
    <video
      :class="[video.active ? 'active' : '']"
      :style="genStyle(video.style)"
      v-for="video in videos"
      :key="video.id"
      autoplay="true"
      muted="true"
      webkit-playsinline="true"
      playsinline="true"
      controls
      controlsList="nodownload"
      @play="fireTracking(video)"
    >
      <source :src="video.src" type="video/mp4" />
    </video>
  </div>
</template>

<script>
/*
 * Component for rendering videos.
 */
import '~/common/live-preview.scss';
import mixin from './utils/mixin';
import { VIDEO } from './utils/constants';
export default {
  props: ['videos', 'pagekey'],
  mixins: [mixin],
  data() {
    return {
      styleCandidates: VIDEO.styleCandidates,
      defaultStyle: VIDEO.defaultStyle,
    };
  },
  mounted() {
    document.addEventListener(
      'WeixinJSBridgeReady',
      function () {
        document.getElementsByTagName('video')[0].play();
      },
      false
    );
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
