<template>
  <div class="pop-text-rules">
    <PopTextRule v-for="rule in rules" :key="rule.id" :rule="rule" />
  </div>
</template>

<script>
// a component to render pop text rules
import mixin from '../utils/mixin';
import PopTextRule from '~/components/goblin/Rule/PopTextRule.vue';

export default {
  props: ['rules'],
  mixins: [mixin],
  components: {
    PopTextRule,
  },
};
</script>

<style lang="scss" scoped>
</style>
