<template>
    <div class="assetsMapField" id="assetsMapField"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
      return {
        map:{},
      }
  },
  mounted(){
      const that = this;
      that.initMap();
  },
  methods:{
    // 初始化地图
    // initMap:function(){
    //       var subwayCityName = '上海';
    //       var list= BMapSub.SubwayCitiesList;
    //       var subwaycity = null;
    //       for (var i = 0; i < list.length; i++) {
    //           if (list[i].name === subwayCityName) {
    //               subwaycity = list[i];
    //               break;
    //           }
    //       }
    //       // 获取北京地铁数据-初始化地铁图
    //       var subway = new BMapSub.Subway('assetsMapField', subwaycity.citycode);
    //       subway.setZoom(0.5);
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.assetsMapField{
  width: 100%;
  height: 700px;
}
</style>
