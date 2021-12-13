<template>
  <Button
    rounded
    :style="{ color: count == 0 ? '#000' : '#fff', background: count == 0 ? '#fff' : '#057642', cursor: 'none'}"
    ><div class="active" v-show="count != 0">
      <img src="https://cdn.chitu.com/test_filter/Icon_check.png" alt="" />
    </div>
    <slot />
    <span
      ><img
        src="https://cdn.chitu.com/test/dark.png"
        alt=""
        class="default"
        v-show="count == 0" /></span
    ><span class="count" v-show="count != 0">{{ count }}</span></Button
  >
</template>

<script>
// load optimize
// occupy place in the first place
// instead of using click.native on parent, emit from child
import Button from '~/components/buefy/components/button/Button.vue';
import BTag from '~/components/buefy/components/tag/Tag.vue';
export default {
  name: 'MFilter',
  props: ['src', 'alt', 'count'],
  components: {
    Button,
    BTag,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.default {
  width: 25px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
}
.is-rounded {
  position: relative;
  width: 130px;
}
.active {
  float: left;
  width: 15px;
  margin-right: 5px;
  vertical-align: middle;
  position: absolute;
  left: 15px;
}
.count {
  width: 25px;
  height: 25px;
  float: right;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  margin-left: 10px;
  right: 2px;
  vertical-align: middle;
  color: #000;
  font-size: 12px;
  position: absolute;
  right: 5px;
}
</style>


