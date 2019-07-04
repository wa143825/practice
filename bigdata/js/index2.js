$(function () {
  function drowResourceChart() {
    const resourceChart = echarts.init(document.getElementById('resourceChart'));
    var dataStyle = {
      normal: {
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
      }
    };

    var placeHolderStyle = {
      normal: {
        color: '#143c91', // 未完成的圆环的颜色
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      },
      emphasis: {
        color: '#143c91' // 未完成的圆环的颜色
      }
    };

    option = {
      title: {
        text: '单位：%',
        x: '20px',
        y: 'top',
        textStyle: {
          fontWeight: 'normal',
          color: '#ffffff',
          fontSize: 15
        }
      },
      tooltip: {
        show: false,
      },
      toolbox: {
        show: false,
      },
      series: [{
        name: 'Pie1',
        type: 'pie',
        clockWise: false,
        radius: [60, 65],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['33%', '50%'],
        data: [{
          value: 25,
          label: {
            normal: {
              formatter: '{d}%',
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '35',
                fontWeight: 'normal',
                color: '#00f2f1'
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#0dd4db',
              shadowColor: '#0dd4db',
              shadowBlur: 10
            }
          }
        }, {
          value: 75,
          name: 'invisible',
          itemStyle: placeHolderStyle,
        }]
      }, {
        name: 'Pie2',
        type: 'pie',
        clockWise: false,
        radius: [60, 65],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['66%', '50%'],
        data: [{
          value: 50,
          label: {
            normal: {
              formatter: '{d}%',
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '35',
                fontWeight: 'normal',
                color: '#00f2f1'
              }
            },
          },
          itemStyle: {
            normal: {
              color: '#28fe08',
              shadowColor: '#28fe08',
              shadowBlur: 10
            }
          },
        }, {
          value: 50,
          name: 'invisible',
          itemStyle: placeHolderStyle,
        }]
      } ]
    }
    resourceChart.setOption(option);
  }


  function vcenter(val) {
    var data = ['50', '80', '40', '60']
    var widthTemp1 = data[0] + '%';
    $('#progressBar1').css('width', widthTemp1);
    $('.schedule1').html(widthTemp1);

    var widthTemp2 = data[1] + '%';
    $('#progressBar2').css('width', widthTemp2);
    $('.schedule2').html(widthTemp2);

    var widthTemp3 = data[2] + '%';
    $('#progressBar3').css('width', widthTemp3);
    $('.schedule3').html(widthTemp3);

    var widthTemp4 = data[3] + '%';
    $('#progressBar4').css('width', widthTemp4);
    $('.schedule4').html(widthTemp4);

  }


  function drowFunnelChart() {
    const funnelChart = echarts.init(document.getElementById('funnelChart'));

    option = {

      // 弹框提示
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}%"    // a对应系列名称,b对应数据项名称,c对应数据项值.
      },
      // 图例
      legend: {
        data: ['磁盘报警', 'I/O等待比例', '内存报警'],
        textStyle: {
          color: '#fff',
        },
      },
      // 金字塔块的颜色
      color: ['#00a1e4', '#24c768', '#e5ce10', '#ff7e00', '#ff0000' ],
      // 系列
      series: [
        // 系列1 (外部)
        {
          name: '就业范围分析',
          type: 'funnel',
          left: '10%',
          width: '80%',
          sort : 'ascending',     // 金字塔形:'ascending',  漏斗图形:'descending'
          label: {
            normal: {
              show: false,
              formatter: '{b}'    // 金字塔外标签
            },
          },
          labelLine: {        // 标签的视觉引导线样式
            normal: {
              show: true,      // 是否显示引导线
              length:	30		// 视觉引导线第一段的长度。
            }
          },
          itemStyle: {        // 图形样式
            normal: {
              opacity: 0.5    // 系列1图形透明度
            }
          },
          tooltip: {
            show: false			// 让系列一(金字塔外层图形的提示框不显示)
          },
          // 系列1数据(数据项值和数据项名称)
          // 系列1(外金字塔)的数据项值一般固定为:20、40、60、80、100,这种有规律的数值,
          // 这样外金字塔才能是一个正三角形.
          data: [
            {value: 33, name: '磁盘报警'},
            {value: 66, name: 'I/O等待比例'},
            {value: 99, name: '内存报警'}
          ]
        },
        // 系列2 (内部)
        {
          name: '',
          type: 'funnel',
          left: '10%',
          width: '80%',
          maxSize: '80%',
          sort : 'ascending',
          label: {
            normal: {
              position: 'inside',
              formatter: '{c}%',      // 标签文本
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {         // 本系列每个数据项中特定的 tooltip 设定
              position:'inside',
              formatter: '{b}: {c}%'
            }
          },
          itemStyle: {
            normal: {
              opacity: 0.8,           // 系列2图形透明度
              borderColor: '#fff',    // 图形边框颜色
              borderWidth:2          // 图形边框宽度大小
            }
          },
          // 系列2数据(数据项值和数据项名称)
          // 系列2(内金字塔)的数据项值才是真实的数据值,通过ajax请求获取数据后展示.
          // 至于系列1和系列2的数据项名一般相同或是相关联的.
          data: [
            {value: 5, name: '磁盘报警'},
            {value: 12, name: 'I/O等待比例'},
            {value: 18, name: '内存报警'}
          ]
        }
      ]
    };

    funnelChart.setOption(option);
  }

  drowResourceChart();
  vcenter(45)
  drowFunnelChart();

  $('.flowjoin').lemCounter({
    value_to: 280
  })

  $('.flowout').lemCounter({
    value_to: 280
  })
})