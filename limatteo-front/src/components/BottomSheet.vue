<template>
  <div>
    <transition name="fade">
      <div class="mask" v-if="show" v-on:click.self="hideSheet"></div>
    </transition>
    <transition name="slide-bottom-up">
      <div class="sheet" v-if="show" v-on:click.self="hideSheet">
        <div class="sheet--header"></div>
        <!-- <slot /> -->
        <ul>
          <li v-for="(select, index) in selects" :key="select.id">
            <div>{{ select.name }}</div>
            <Checkbox v-model="selecteds" :native-value="select.name" type="is-success" />
          </li>
        </ul>
        <div class="action">
          <Button rounded @click="submit">提交</Button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Button from '~/components/buefy/components/button/Button.vue';
import Checkbox from '~/components/buefy/components/checkbox/Checkbox.vue';

export default {
  // TODO: mask should appear and disappear immediately.
  props: {
    show: Boolean,
    selects: Array,
    defaultSelecteds: Array,
  },
  data() {
    return { selecteds: this.defaultSelecteds || [] };
  },
  components: {
    Button,
    Checkbox,
  },
  // updated() {
  //   console.log('hahahahaha');
  //   this.selecteds = this.defaultSelecteds // not working, will block manually changing checkbox
  // },
  watch: {
    show: function (show) {
      if (show) {
        console.log('this.defaultSelecteds', this.defaultSelecteds);
        this.selecteds = this.defaultSelecteds;
      }
    },
  },
  methods: {
    submit() {
      this.$emit('confirmSelects', this.selecteds);
    },
    hideSheet() {
      this.$emit('confirmSelects', null);
    },
  },
};
</script>

<style lang="scss" scoped>
.mask {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.88);
}
.sheet {
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 64px;
}
.sheet--header {
  position: relative;
  margin: 10px auto;
  background-color: rgba(0, 0, 0, 0.6);
  width: 48px;
  height: 4px;
  border-radius: 4px;
}
.action {
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  min-height: 160px;
  max-height: 440px;
  overflow-y: scroll;
  li {
    position: relative;
    margin: 0 auto;
    width: 343px;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

// override buefy default style
.b-checkbox.checkbox:not(.button) {
  margin-right: 0 !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-bottom-up-enter-active {
  animation: slide-bottom-up-in 0.5s;
}
.slide-bottom-up-leave-active {
  animation: slide-bottom-up-in 0.5s reverse;
}

@keyframes slide-bottom-up-in {
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0%);
  }
}
.button{
  background-color: #0A66C2;
  color: #fff;
  width: 24em;
  height: 2.4em;
  font-size: 14px;
}

</style>