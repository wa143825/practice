$(function() {
  function drowserverdataChart() {  //绩效柱状图
    const serverdataChart = echarts.init(document.getElementById('serverdata'));
    var dataAxis = ['CPU占用', '内存占用', '储存占用', 'IO等待比例'];
    var data = [40, 25, 35, 30];
    var yMax = 80;
    var dataShadow = [];
    for (var i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }
    option = {
      xAxis: {
        type : 'category',
        data: dataAxis,
        silent: false,
        axisLabel: {
          textStyle: {
            fontSize: 14,
            color: '#fff',
            fontFamily: 'Microsoft YaHei',
            padding: [5,0],
          },
        },
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: '#999'
          }
        }
      },
      dataZoom: [
        {
          type: 'inside'
        }
      ],
      series: [
        {
          type: 'bar',
          itemStyle: {
            normal: {color: 'rgba(0,0,0,0.05)'}
          },
          barGap:'-100%',
          barCategoryGap:'40%',
          data: dataShadow,
          animation: false
        },
        {
          type: 'bar',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0, color: '#7106d9'},
                {offset: 0.5, color: '#a003d5'},
                {offset: 1, color: '#cf00d0'}
              ]),
              label: {
                show: true,
                formatter: '{c}%',
                position: 'top',
                textStyle: {
                  color: '#fff',
                  fontSize: 16
                }
              }
            }
          },
          data: data
        }
      ]
    };
    serverdataChart.setOption(option);
  }

  function drowinternetChart() {
    const internetChart = echarts.init(document.getElementById('internet'));
    option = {
      legend: {
        data:['网络1','网络2'],
        top: '10px',
        textStyle: {
          color: '#fff'
        }
      },
      tooltip: {
        // trigger: 'axis',
        formatter: function (parmas) {
          console.log(parmas)
          return `<span style="color: #eaff02;">${parmas.value}ms</span>  `
        }
      },
      xAxis:  {
        type: 'category',
        boundaryGap: false,
        show : false,
        splitLine: {
          show: true,
          lineStyle:{
            color: ['#173d75'],
            width: 1,
            type: 'dashed'
          }
        }
      },
      yAxis: {
        splitLine: {
          show: true,
          lineStyle:{
            color: ['#173d75'],
            width: 1,
            type: 'dashed'
          }
        },
        axisLabel: {
          color: '#fff',
        },
        axisPointer: {
          lineStyle: {
            color: '#fff',
          },
          value: '140',
        },
      },
      series: [
        {
          name:'internet0',
          type:'line',
          markLine: {
            data: [
              { name: '', xAxis: 0, yAxis: 9},
              { name: '', xAxis: 6, yAxis: 9},
            ],
            symbol: 'none',
            lineStyle: {
              type: 'solid',
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#d36717' 
                }, {
                    offset: 0.5, color: '#fbfb04' 
                }, {
                  offset: 1, color: '#d36717' 
                }],
                global: false // 缺省为 false
            },
              width: 3
            },
          },
        },
        {
          name:'网络1',
          type:'line',
          data:[11, 11, 15, 13, 12, 13, 10],
          itemStyle : {
            normal : {
              color:'#00FFFF',
              lineStyle:{
                color:'#00FFFF'
              }
            }
          },
          
        },
        {
          name:'网络2',
          type:'line',
          data:[1, 12, 2, 5, 13, 2, 0],
          itemStyle : {
            normal : {
              color:'#c9c434',
              lineStyle:{
                color:'#c9c434'
              }
            }
          },
        }
      ]
    };
    internetChart.setOption(option);
  }

  function drowmiddlemonthChart() {
    let data =[49, 75, 60, 120, 102, 65, 70]
    var yMax = 120;
    var dataShadow = [];
    for (var i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }
    const middlemonthChart = echarts.init(document.getElementById('middlemonth'));
    option = {
      grid: {
        left: '5%',
        bottom: '5%',
        top: '20%',
        right: '6%',
        containLabel: true
      },
      xAxis: {
        type : 'category',
        boundaryGap: false,
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
        silent: false,
        splitLine: {
          show: true,
          lineStyle:{
            color: '#12255F',
            width: 2,
            type: 'solid'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#12255F',
            width: 1,//这里是为了突出显示加上的
          }
        },
        axisLabel: {
          textStyle: {
            fontSize: 14,
            color: '#00B7B9',
            fontFamily: 'Microsoft YaHei',
            // padding: [5,0],
            shadowColor: '#12255F', // 默认透明
          },
        },
      },
      yAxis: {
        splitLine: {
          show: true,
          lineStyle:{
            color: '#12255F',
            width: 2,
            type: 'solid'
          }
        },
        axisLabel: {
          textStyle: {
            color: '#00B7B9'
          }
        }
      },
      series: [{
        data: dataShadow,
        type: 'line',
        areaStyle: {},
        itemStyle: {
          normal: { 
            color: 'rgba(0,0,0,0)'  //背景渐变色
          },
        },
        symbolSize:6, 
      },{
        data: data,
        label: {
          normal: {
            show: true,
            position: 'top',
            color:'#00B7B9',
            distance: 5,
            formatter: "{c}FPS",
          }
        },
        type: 'line',
        areaStyle: {},
        itemStyle: {
          normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
              offset: 0, color: '#117db1' // 0% 处的颜色
            }, {
              offset: 0.5, color: '#0c5580' // 100% 处的颜色
            }, {
              offset: 1, color: '#03132C' // 100% 处的颜色
            }]
            ),  //背景渐变色
          },
          emphasis: {
            color: '#f2f714',
            lineStyle: {        // 系列级个性化折线样式
              width:2,
              type: 'dotted',
              color: "#4fd6d2" //折线的颜色
            }
          }
        },//线条样式
        symbolSize:6, //折线点的大小
      }]
    };
    middlemonthChart.setOption(option);
  }
  function drowMapChart() {
    const mapChart = echarts.init(document.getElementById('mapChart'));
    var yichangData = "yichang.json";
    $.get(yichangData, function(sdJson) {
      echarts.registerMap('yichang', sdJson);
      mapChart.setOption({
        series: [{
          type: 'map',
          map: 'yichang'
        }]
      });
      var geoCoordMap = {
        '西陵区':[111.295468,30.7],
        '猇亭区':[111.427642,30.530744],
        '点军区':[111.268163,30.69232],
        '伍家岗区':[111.307215,30.679053],
        '远安县':[111.643,31.059626],
        '兴山县':[110.754499,31.34795],
        '五峰土家族自治县':[110.674938,30.199252],
      };
      var goData = [
        [{name: '远安县'}, {id: 1,name: '西陵区',value: 99}],
        [{name: '远安县'},{id: 1,name: '猇亭区',value: 160}],
        [{name: '远安县'},{id: 1,name: '兴山县',value:200}],
        [{name: '远安县'},{id: 1,name: '五峰土家族自治县',value:400}],
      ];
  //值控制圆点大小
      var backData = [
        [{name: '远安县'}, {id: 2,name: '远安县',value: 200}],
        [{name: '猇亭区'}, { id: 2,name: '远安县',value: 200}],
      ];
      var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
      var arcAngle = function(data) {
        var j, k;
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          if (dataItem[1].id == 1) {
            j = 0.2;
            return j;
          } else if (dataItem[1].id == 2) {
            k = -0.2;
            return k;
          }
        }
      }
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i];
          var fromCoord = geoCoordMap[dataItem[0].name];
          var toCoord = geoCoordMap[dataItem[1].name];
          if (dataItem[1].id == 1) {
            if (fromCoord && toCoord) {
              res.push([{
                coord: fromCoord,
              }, {
                coord: toCoord,
                value: dataItem[1].value //线条颜色
  
              }]);
            }
          } else if (dataItem[1].id == 2) {
            if (fromCoord && toCoord) {
              res.push([{
                coord: fromCoord,
              }, {
                coord: toCoord
              }]);
            }
          }
        }
        return res;
      };
  
      var color = ['#fff', '#FF1493', '#0000FF'];
      var series = [];
      [
        ['1', goData],
        ['2', backData]
      ].forEach(function(item, i) {
        series.push({
          name: item[0],
          type: 'lines',
          zlevel: 2,
          //线特效配置
          effect: {
            show: true,
            period: 6,
            trailLength: 0.1,
            symbol: planePath, //标记类型
            symbolSize: 10
          },
          lineStyle: {
            normal: {
              width: 1,
              opacity: 0.4,
              curveness: arcAngle(item[1]), //弧线角度
              color: '#fff'
            }
          },
          data: convertData(item[1])
        }, {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          //波纹效果
          rippleEffect: {
            period: 2,
            brushType: 'stroke',
            scale: 3
          },
          label: {
            normal: {
              show: true,
              color: '#fff',
              position: 'right',
              formatter: '{b}'
            }
          },
          //终点形象
          symbol: 'circle',
          //圆点大小
          symbolSize: function(val) {
            return val[2] / 8;
          },
          itemStyle: {
            normal: {
              show: true
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[1].name,
              value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
          })
        });
      });
      option = {
        // tooltip: {
        //   trigger: 'item',
        //   formatter: "{b}"
        // },
        //线颜色及飞行轨道颜色
        visualMap: {
          show: false,
          min: 0,
          max:300,
          color: ['#02e817', '#e80202', '#0233e8']
        },
        //地图相关设置
        geo: {
          map: 'yichang',
          //视角缩放比例
          //显示文本样式
          label: {
            normal: {
              show: false,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },
          //鼠标缩放和平移
          roam: true,
          itemStyle: {
            normal: {
              borderColor: 'rgba(147, 235, 248, 1)',
              borderWidth: 1,
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              shadowColor: 'rgba(128, 217, 248, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: '#389BB7',
              borderWidth: 0
            }
          }
        },
        series: series
      };
      mapChart.setOption(option);
    })
  }
  drowserverdataChart()
  drowinternetChart()
  drowmiddlemonthChart()
  drowMapChart()
})