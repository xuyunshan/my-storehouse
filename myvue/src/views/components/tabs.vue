<template>
  <div class="chartsTabChange">
    <el-tabs @tab-click="changeTab" v-model="editableTabsValue">
      <el-tab-pane
        :key="item.index"
        v-for="(item, index) in editableTabs"
        :label="item.title"
        :name="item.name"
      >
        {{item.content}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        editableTabsValue: '',
      }
    },
    props:{
      editableTabs:{
        type:Array,
        default:[],
      }
    },
    methods: {
      changeTab(val){
        this.$emit('tabChange',this.editableTabsValue);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.chartsTabChange {
  // padding: 20px;
  width: 200px;
  .el-tabs__item.is-active{
    font-size: 20px;
  }
  .el-tabs__item:hover{
    font-size: 20px;
  }
  .el-tabs__nav-wrap::after{
    height: 0;
  }
}
</style>
