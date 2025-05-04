// 获取中国地图数据
$.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json', function () {
    // 注册中国地图
    var myChart = echarts.init(document.querySelector(".map .chart"));
    // 配置项
    var option = {
        backgroundColor: '#001B48',
        title: {
            text: '四大发明可视化-ECharts',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 24
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if (params.seriesType === 'effectScatter') {
                    return params.name + '<br/>' + params.value[2];
                } else if (params.seriesType === 'lines') {
                    return params.data.fromName + ' -> ' + params.data.toName;
                }
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            text: ['高', '低'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#1E90FF', '#1E90FF']
            },
            show: false
        },
        series: [
            {
                name: '四大发明影响力',
                type: 'map',
                map: 'china',
                roam: true,
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                    { name: '北京', value: 95 },
                    { name: '西安', value: 85 },
                    { name: '南京', value: 80 },
                    { name: '杭州', value: 75 },
                    { name: '广州', value: 70 }
                ]
            },
            {
                name: '指南针',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [
                    { name: '北京', value: [116.40, 39.90, '指南针-古代导航'] },
                    { name: '西安', value: [108.94, 34.34, '指南针-古代军事'] }
                ],
                symbolSize: function (val) {
                    return val[2] * 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                itemStyle: {
                    color: '#F4E925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                },
                zlevel: 1
            },
            {
                name: '造纸术',
                type: 'lines',
                coordinateSystem: 'geo',
                data: [
                    {
                        coords: [
                            { name: '西安' },
                            { name: '南京' }
                        ],
                        fromName: '西安',
                        toName: '南京',
                        value: 80
                    },
                    {
                        coords: [
                            { name: '西安' },
                            { name: '广州' }
                        ],
                        fromName: '西安',
                        toName: '广州',
                        value: 70
                    }
                ],
                lineStyle: {
                    width: 1,
                    color: '#fff'
                },
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    symbol: 'arrow',
                    symbolSize: 5
                },
                zlevel: 2
            }
        ]
    };
    // 使用配置项显示图表
    myChart.setOption(option);
});