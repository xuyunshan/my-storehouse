<template>
    <div id="container"></div>
</template>

<script>
import G6 from '@antv/g6';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
      return {
          data:{
            nodes: [
                {
                    id: 'node1',
                    label:'虹桥火车站',
                    nextRow:false,
                },
                {
                    id: 'node2',
                    label:'虹桥2号航站楼',
                    nextRow:false,
                },
                {
                    id: 'node3',
                    label:'虹桥1号航站楼',
                    nextRow:false,
                },
                {
                    id: 'node4',
                    label:'上海动物园',
                    nextRow:false,
                },
                {
                    id: 'node5',
                    label:'龙溪路',
                    nextRow:false,
                },
                {
                    id: 'node6',
                    label:'水城路',
                    nextRow:false,
                },
                {
                    id: 'node7',
                    label:'伊犁路',
                    nextRow:false,
                },
                {
                    id: 'node8',
                    label:'宋园路',
                    nextRow:false,
                },
                {
                    id: 'node9',
                    label:'虹桥路',
                    nextRow:false,
                },
                {
                    id: 'node10',
                    label:'交通大学',
                    nextRow:false,
                },
                {
                    id: 'node11',
                    label:'上海图书馆',
                    nextRow:false,
                },
                {
                    id: 'node12',
                    label:'山西南路站',
                    nextRow:false
                },
                {
                    id: 'node15',
                    label:'航中路2',
                    nextRow:true
                },
                {
                    id: 'node14',
                    label:'航中路1',
                    nextRow:true
                },
                {
                    id: 'node13',
                    label:'航中路',
                    nextRow:true
                },
            ],
            edges: [
                    {
                        source: 'node1',
                        target: 'node2',
                    },
                    {
                        source: 'node2',
                        target: 'node3',
                    },
                    {
                        source: 'node3',
                        target: 'node4',
                    },
                    {
                        source: 'node4',
                        target: 'node5',
                    },
                    {
                        source: 'node5',
                        target: 'node6',
                    },
                    {
                        source: 'node6',
                        target: 'node7',
                    },
                    {
                        source: 'node7',
                        target: 'node8',
                    },
                    {
                        source: 'node8',
                        target: 'node9',
                    },
                    {
                        source: 'node9',
                        target: 'node10',
                    },
                    {
                        source: 'node10',
                        target: 'node11',
                    },
                    {
                        source: 'node11',
                        target: 'node12',
                    },
                    {
                        source: 'node14',
                        target: 'node13'
                    },
                    {
                        source: 'node15',
                        target: 'node14'
                    },
                    {
                        source: 'node13',
                        target: 'node4'
                    },
                ],
        }
      }
  },
  mounted(){
    const that = this;
    const fittingString = (str, maxWidth, fontSize) => {
        const ellipsis = '...';
        const ellipsisLength = G6.Util.getTextSize(ellipsis, fontSize)[0];
        let currentWidth = 0;
        let res = str;
        const pattern = new RegExp("[\u4E00-\u9FA5]+"); // distinguish the Chinese charactors and letters
        str.split('').forEach((letter, i) => {
            if (currentWidth > maxWidth - ellipsisLength) return;
            if (pattern.test(letter)) {
            // Chinese charactors
            currentWidth += fontSize;
            } else {
            // get the width of single letter according to the fontSize
            currentWidth += G6.Util.getLetterWidth(letter, fontSize);
            }
            if (currentWidth > maxWidth - ellipsisLength) {
            res = `${str.substr(0, i)}${ellipsis}`;
            }
        });
        return res;
    };
    const width = document.getElementById('container').scrollWidth;
    const height = document.getElementById('container').scrollHeight || 500;
    var x1 = 0;
    var x2 = 0;
    var maxX = 0;
    this.data.nodes.forEach((item,ind) => {
        if(item.nextRow){
            item.y = 100;
            item.x = x2 * 100 + 50;
            x2 += 1;
        }else {
            if(x1 < parseInt(width / 100)){
                item.x = x1 * 100 + 50;
                item.y = 50;
                item.label = fittingString(item.label,100,12);
                item.labelCfg = {
                    position: 'top',
                }
            }else if(x1 == parseInt(width / 100)){
                maxX = 100 * x1;
                item.x = x1 * 100 ;
                item.y = 100;
                item.label = fittingString(item.label,100,12);
                item.labelCfg = {
                    position: 'right',
                }
            }else {
                item.x = maxX - (100 * x1 - 50 - maxX);
                item.y = 150;
                item.label = fittingString(item.label,100,12);
                item.labelCfg = {
                    position: 'bottom',
                }
            }
        }
            
        x1 += 1;
    })
      
    G6.registerEdge('multipleLabelsEdge', {
        options: {
            style: {
            stroke: '#000',
            },
        },
        labelAutoRotate: true,
        draw(cfg, group) {
            const startPoint = cfg.startPoint;
            const endPoint = cfg.endPoint;
            const stroke = (cfg.style && cfg.style.stroke) || this.options.style.stroke;

            const shape = group.addShape('path', {
            attrs: {
                stroke,
                path: [
                ['M', startPoint.x, startPoint.y],
                ['L', endPoint.x, endPoint.y],
                ],
            },
            name: 'path-shape',
            });
            if (cfg.label && cfg.label.length) {
            // the left label
            group.addShape('text', {
                attrs: {
                text: cfg.label[0],
                fill: '#595959',
                textAlign: 'end',
                textBaseline: 'bottom',
                x: startPoint.x,
                y: startPoint.y - 10,
                },
                name: 'left-text-shape',
            });
            }
            // return the keyShape
            return shape;
        },
    });


    const graph = new G6.Graph({
        container: 'container',
        width,
        height,
        linkCenter: true,
        modes: {
            default: [
            ],
        },
        defaultNode: {
            style: {
            opacity: 1,
            stroke: '#000',
            fill:'#fff'
            },
            size:[10],
            labelCfg: {
                style: {
                    fill: '#000',
                    fontSize: 14,
                },
                position: 'top',
            },
        },
        defaultEdge: {
            size: 5,
            color: '#f60',
            style: {
            opacity: 0.6,
            lineAppendWidth: 1,
            },
        },
    });
    // 节点上的点击事件
    graph.on('node:click', function(event) {
        const { item } = event;
    });
    graph.data(this.data);
    graph.render();
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
