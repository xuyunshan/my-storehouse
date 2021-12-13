<template>
  <div class="pop-image-rules">
    <PopImageRule v-for="rule in rules" :key="rule.id" :rule="rule" />
  </div>
</template>

<script>
// a component to render pop image rules
import mixin from '../utils/mixin';
import PopImageRule from '~/components/goblin/Rule/PopImageRule.vue';

export default {
  props: ['rules'],
  mixins: [mixin],
  components: {
    PopImageRule,
  },
};
</script>

<style lang="scss" scoped>
</style>
