<template>
  <div class="div">
    {{ count }}
    <button @click="plus">+1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'vuex',
  data() {
    return {};
  },
  mounted() {
    const that = this;
    that.fun2();
  },
  computed: {
    ...mapState(['count']),
  },
  methods: {
    fun1() {
      console.log('fun1');
      return new Promise((res, rej) => {
        setTimeout(() => {
          console.log('callback');
          res(1111111);
        }, 3000);
      });
    },
    fun2() {
      console.log('fun2');
      this.fun1().then((val) => {
        console.log(val);
      });
    },
    fun3() {},
    plus() {
      const that = this;
      that.$store.dispatch('changeCountA', function () {});
      that.X();
    },
    X() {
      var a = this.$store.getters.xTen;
      alert(a);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div {
  padding: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
