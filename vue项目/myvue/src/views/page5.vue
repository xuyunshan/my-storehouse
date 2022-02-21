<template>
  <div class="div">
    <tabs :editableTabs='editableTabs' @tabChange='tabChange'>
    </tabs>
  </div>
</template>

<script>
import tabs from './components/tabs'
  export default {
    components:{
      tabs
    },
    data() {
      return {
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
        }, {
          title: 'Tab 2',
          name: '2',
        }, {
          title: 'Tab 3',
          name: '3',
        }, {
          title: 'Tab 4',
          name: '4',
        }, {
          title: 'Tab 5',
          name: '5',
        }, {
          title: 'Tab 6',
          name: '6',
        }, {
          title: 'Tab 7',
          name: '7',
        }, {
          title: 'Tab 8',
          name: '8',
        }],
      }
    },
    methods: {
      tabChange(val){
        // debugger
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.div {
  padding: 20px;
}
.el-tabs__item.is-active{
  font-size: 28px;
}
.el-tabs__item:hover{
  font-size: 28px;
}
</style>
