<template>
  <div>
    <div v-for="item in data" :key="item.id">
      <div v-if="item.haveBifurcation">
        <Child>
          <template v-slot:tit>
            <h1>好</h1>
          </template>
          <template v-slot:body>
            <h1>差</h1>
          </template>
        </Child>
      </div>
    </div>
  </div>
</template>

<script>
import Child from './components/Child';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Child,
  },
  data() {
    return {
      map: {},
      data: [
        {
          id: 'line1',
          name: '1号线',
          haveBifurcation: true,
          stations: [
            {
              id: '1',
              stationName: '1站',
              positionx: '0',
              positiony: '10',
            },
            {
              id: '2',
              stationName: '2站',
              positionx: '10',
              positiony: '10',
            },
            {
              id: '3',
              stationName: '3站',
              positionx: '30',
              positiony: '10',
            },
            {
              id: '4',
              stationName: '4站',
              positionx: '40',
              positiony: '10',
            },
            {
              id: '5',
              stationName: '5站',
              positionx: '50',
              positiony: '10',
            },
            {
              id: '6',
              stationName: '6站',
              positionx: '60',
              positiony: '10',
            },
            {
              id: '7',
              stationName: '7站',
              positionx: '0',
              positiony: '20',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    const that = this;
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
