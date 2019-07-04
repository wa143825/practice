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
        center: ['20%', '50%'],
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
        center: ['50%', '50%'],
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
      }, {
        name: 'Pie3',
        type: 'pie',
        clockWise: false,
        radius: [60, 65],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['80%', '50%'],
        data: [{
          value: 75,
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
              color: '#ff0000',
              shadowColor: '#ff0000',
              shadowBlur: 10
            }
          }
        }, {
          value: 25,
          name: 'invisible',
          itemStyle: placeHolderStyle,
        }]
      }, ]
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


  function drowPieChart() {
    const pieChart = echarts.init(document.getElementById('pieChart'));

    option = {
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
      color: ['#00a1e4', '#24c768', '#e5ce10' ],
      // 系列
      series: [
        {
          type: 'pie',
          radius : '60%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },
          data:[
            {
              value: 15,
              name: 'I/O等待比例',
              label: {
                normal: {
                  formatter: [
                      '{title|{b}}',
                      '',
                      '{value|10.152.10.152}',
                      '{value|10.152.10.152}',
                      '{value|10.152.10.152}'
                  ].join('\n'),
                  borderColor: '#0966b8',
                  backgroundColor: '#041742',
                  position: 'outside',
                  padding: 10,
                  width: 150,
                  align: 'left',
                  borderWidth: 1,
                  rich: {
                    title: {
                      color: '#01b3b4',
                      fontSize: 18,
                      fontWeight: 600
                    },
                    value: {
                      color: '#01b3b4',
                      width: '100%',
                      fontSize: 18,
                      padding: [5, 0, 0, 10]
                    },
                    brs:{
                      height: '10px'
                    }
                  }
                }
              }
            },
            {
              value:80, 
              name: '磁盘空间',
              label: {
                normal: {
                  formatter: [
                      '{title|{b}}',
                      '',
                      '{value|10.152.10.152}',
                      '{value|10.152.10.152}',
                      '{value|10.152.10.152}'
                  ].join('\n'),
                  borderColor: '#0966b8',
                  backgroundColor: '#041742',
                  position: 'outside',
                  padding: 10,
                  width: 150,
                  align: 'left',
                  borderWidth: 1,
                  rich: {
                    title: {
                      color: '#01b3b4',
                      fontSize: 18,
                      fontWeight: 600
                    },
                    value: {
                      color: '#01b3b4',
                      width: '100%',
                      fontSize: 18,
                      padding: [5, 0, 0, 10]
                    },
                    brs:{
                      height: '10px'
                    }
                  }
                }
              }
            },
            {
              value:15, 
              name: '内存低于',
              label: {
                normal: {
                  formatter: [
                      '{title|{b}}',
                      '',
                      '{value|10.152.10.152}',
                      '{value|10.152.10.152}',
                      '{value|10.152.10.152}'
                  ].join('\n'),
                  borderColor: '#0966b8',
                  position: 'outside',
                  padding: 10,
                  backgroundColor: '#041742',
                  width: 150,
                  align: 'left',
                  borderWidth: 1,
                  rich: {
                    title: {
                      color: '#01b3b4',
                      fontSize: 18,
                      fontWeight: 600
                    },
                    value: {
                      color: '#01b3b4',
                      width: '100%',
                      fontSize: 18,
                      padding: [5, 0, 0, 10]
                    },
                    brs:{
                      height: '10px'
                    }
                  }
                }
              }
            },
          ]
        }
      ]
    };

    pieChart.setOption(option);
  }

  drowResourceChart();
  vcenter(45)
  drowPieChart();

  $('.flowjoin').lemCounter({
    value_to: 280
  })

  $('.flowout').lemCounter({
    value_to: 280
  })
})