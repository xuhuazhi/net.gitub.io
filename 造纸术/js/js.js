$(window).load(function () {
    $(".loading").fadeOut()
})
$(function () {
    echarts_21();
    echarts_22();
    echarts_4();
    echarts_5();
    echarts_6();
    //echarts_7();
    function echarts_21() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart21'));

        option1 = {
            title: {
                text: '造纸术历史影响力趋势',
                left: 'center',
                textStyle: {
                    color: '#fff',  // 标题改为白色
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            },
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,0.8)',  // 提示框深色背景
                formatter: function (params) {
                    return '<span style="color:#fff">' + params[0].name + '</span><br/>' +
                        '<span style="color:#7cdbff">世界影响：' + params[0].value + '%</span><br/>' +
                        '<span style="color:#ff9d00">中国影响：' + params[1].value + '%</span>';
                }
            },
            xAxis: {
                type: 'category',
                data: ['公元105年', '公元3-4世纪', '公元751年', '公元1150年', '公元1450年'],
                axisLabel: {
                    fontSize: 14,
                    color: '#fff',  // X轴标签白色
                    fontWeight: 'bold'
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'  // X轴线白色
                    }
                }
            },
            yAxis: {
                type: 'value',
                max: 100,
                axisLabel: {
                    formatter: '{value}%',
                    color: '#fff',  // Y轴标签白色
                    fontWeight: 'bold'
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'  // Y轴线白色
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)'  // 网格线改为半透明白
                    }
                }
            },
            legend: {
                data: ['世界影响度', '中国影响度'],
                top: 30,
                textStyle: {
                    color: '#fff'  // 图例文字白色
                }
            },
            series: [
                {
                    name: '世界影响度',
                    type: 'line',
                    data: [5, 15, 35, 50, 80],
                    smooth: true,
                    lineStyle: {
                        width: 3,
                        color: '#7cdbff'  // 改为亮青色
                    },
                    symbol: 'circle',
                    symbolSize: 10,
                    itemStyle: {
                        color: '#7cdbff',
                        borderColor: '#fff'  // 数据点边框白色
                    },
                    markPoint: {
                        data: [
                            { name: '尚未大规模传播', coord: ['公元105年', 5] },
                            { name: '造纸术与古登堡印刷术结合', coord: ['公元1450年', 80] }
                        ],
                        label: {
                            color: '#000'  // 标注文字黑色
                        }
                    }
                },
                {
                    name: '中国影响度',
                    type: 'line',
                    data: [30, 60, 65, 70, 75],
                    smooth: true,
                    lineStyle: {
                        width: 3,
                        color: '#ff9d00'  // 改为橙色
                    },
                    symbol: 'rect',
                    symbolSize: 10,
                    itemStyle: {
                        color: '#ff9d00',
                        borderColor: '#fff'  // 数据点边框白色
                    },
                    markPoint: {
                        data: [
                            { name: '纸张逐渐取代竹简和缣帛', coord: ['公元105年', 30] },
                            { name: '发挥着重要作用', coord: ['公元1450年', 75] }
                        ],
                        label: {
                            color: '#000'  // 标注文字黑色
                        }
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
        window.addEventListener("resize", function () {
            myChart.resize();
        });


    }
    function echarts_22() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart22'));

        option1 = {
            title: {
                text: '造纸术应用对经济贸易的影响 (7世纪-20世纪)',
                left: 'center', // 标题居中
                textStyle: { color: '#fff', fontSize: 18 }
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>' +
                        '中国：' + params[0].value + '亿美元<br/>' +
                        '世界：' + params[1].value + '亿美元';
                }
            },
            legend: {
                data: ['中国海上贸易额', '全球海上贸易额'],
                textStyle: { color: '#fff' },
                top: 35
            },
            xAxis: {
                type: 'category',
                data: ['7世纪', '11世纪', '14世纪', '16世纪', '18世纪', '20世纪'],
                axisLabel: { color: '#fff', fontSize: 12 }, // x轴坐标颜色也设为白色
                axisLine: { lineStyle: { color: '#fff' } }
            },
            yAxis: {
                type: 'value',
                name: '贸易额 (亿美元)',
                nameTextStyle: { color: '#fff' },
                axisLabel: { color: '#fff' },
                splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
            },
            series: [
                {
                    name: '中国海上贸易额',
                    type: 'line',
                    data: [3, 8, 12, 15, 20, 25],
                    smooth: true,
                    lineStyle: { color: '#ff6b6b', width: 3 },
                    symbol: 'circle',
                    symbolSize: 8,
                    markPoint: {
                        data: [
                            { name: '扩展到用桑皮、藤皮造纸', coord: ['7世纪', 3] },
                            { name: '相关著作也不断出现', coord: ['20世纪', 25] }
                        ]
                    }
                },
                {
                    name: '全球海上贸易额',
                    type: 'line',
                    data: [10, 20, 30, 40, 50, 60],
                    smooth: true,
                    lineStyle: { color: '#18d627', width: 3 },
                    symbol: 'triangle',
                    itemStyle: { color: '#18d627' },
                    symbolSize: 8,
                    markPoint: {
                        data: [
                            { name: '全国涉及不是特别多', coord: ['7世纪', 10] },
                            { name: '全球流行', coord: ['20世纪', 60] }
                        ]
                    }
                }
            ],
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 100
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option1);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }


    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        
        // 假设images对象中包含图片路径
        var images = {
            earlyPaper: 'early-paper.jpg', // 早期造纸术图片
            spreadPaper: 'spread-paper.jpg', // 造纸术传播图片
            spreadEurope: 'spread-europe.jpg', // 造纸术传播到欧洲图片
            modernPaper: 'modern-paper.jpg' // 现代造纸术图片
        };
    
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return `
                        <strong>${params.name}</strong><br/>
                        时间：${params.value[0] < 0 ? Math.abs(params.value[0]) + ' BC' : params.value[0] + ' 年'}<br/>
                        描述：${params.data.desc}
                    `;
                }
            },
            xAxis: {
                type: 'time',
                name: '时间轴',
                nameTextStyle: {
                    color: '#ffffff'
                },
                axisLine: { 
                    lineStyle: { 
                        color: '#eee',
                        width: 2
                    }
                },
                axisLabel: {
                    formatter: function (value) {
                        return value < 0 ? Math.abs(value) + ' BC' : value + ' 年';
                    },
                    color: '#ffffff',
                    fontSize: 12
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                        width: 1
                    },
                    length: 5
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                        width: 1,
                        length: 5
                    }
                },
                // 新增配置：控制刻度的显示间隔
                interval: function (index, value) {
                    // 如果是 1000 年，不显示刻度
                    if (value === 1000) {
                        return false;
                    }
                    return true;
                }
            },
            yAxis: { 
                show: false 
            },
            series: [{
                type: 'scatter',
                symbolSize: 80,
                data: [
                    {
                        name: '蔡伦改进造纸术',
                        value: [105, 1],
                        desc: '东汉时期，蔡伦改进了造纸术，使用树皮、麻头、破布和旧渔网等原料，制成了适合书写的植物纤维纸。',
                        // symbol: 'image://' + images.movableType // 使用本地图片路径
                        symbol: 'image://https://www.yebaike.com/d/file/20200712/93ad31ffda5eed8b6b92cf791765a152.jpg' // 替代图片
                    },
                    {
                        name: '造纸术传播到阿拉伯世界',
                        value: [751, 1],
                        desc: '唐朝时期，造纸术传入阿拉伯世界，经过怛罗斯之战，阿拉伯人从中国工匠那里学会了造纸技术。',
                        // symbol: 'image://' + images.gutenberg // 使用本地图片路径
                        symbol: 'image://https://tse3-mm.cn.bing.net/th/id/OIP-C.sp62UGCrE7vcwuLew3FYegHaFf?rs=1&pid=ImgDetMain' // 替代图片
                    },
                    {
                        name: '造纸术传播到欧洲',
                        value: [1150, 1],
                        desc: '12世纪，造纸术传入欧洲，西班牙的萨拉戈萨建立了欧洲第一家造纸厂，随后造纸技术在欧洲各地传播。',
                        symbol: 'image://https://pic3.zhimg.com/v2-47828bef0e47b7ec22e61f2a382d7b98_1440w.jpg?source=172ae18b'
                    },
                    {
                        name: '现代造纸技术的改进',
                        value: [1800, 1],
                        desc: '工业革命期间，造纸技术进一步发展，出现了机器造纸，提高了生产效率和纸张质量。',
                        // symbol: 'image://' + images.printingPress // 使用本地图片路径
                        symbol: 'image://https://tse3-mm.cn.bing.net/th/id/OIP-C.o5BydZB5zXd3FO_7S2-4vgHaEO?rs=1&pid=ImgDetMain' // 替代图片
                    }
                ],
                itemStyle: { 
                    borderColor: '#fff', 
                    borderWidth: 2 
                },
                emphasis: { 
                    scale: 1.2 
                }
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
        var myChart = echarts.init(document.getElementById('echart5'));

        option = {
            title: {
                text: '销售排名（前六）',
                textAlign: 'center',     // 水平居中
                left: '50%',             // 水平位置居中（基于父容器）
                top: '2%',               // 顶部间距（根据需求调整）
                textStyle: {
                    color: '#fff',       // 字体颜色与图表标签一致
                    fontSize: 16,        // 适当大于轴标签的字号
                    fontWeight: 'bold'   // 可选，加粗突出
                }
            },
            grid: {
                top: '10%',
                left: '10%',   // 增加左侧边距
                right: '5%',   // 增加右侧边距
                bottom: '30%'  // 增加底部边距给x轴标签留空间
            },
            xAxis: {
                type: 'category',
                data: ['包装纸', '文化纸', '生活用纸', '特种纸', '瓦楞纸', '纸板'],
                axisLabel: {
                    color: '#fff',
                    rotate: 45,          // 标签旋转45度
                    fontSize: 12,        // 适当缩小字号
                    interval: 0,          // 强制显示所有标签
                    align: 'right',       // 对齐方式
                    margin: 20,           // 标签与轴线间距
                    verticalAlign: 'middle'
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    alignWithLabel: true // 刻度与标签对齐
                }
            },
            yAxis: {
                type: 'value',
                name: '(单位：亿)',
                nameTextStyle: { color: '#fff' },
                axisLabel: {
                    color: '#fff'
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.3)'
                    }
                }
            },
            series: [{
                data: [150, 120, 100, 80, 60, 50],
                type: 'bar',
                itemStyle: {
                    color: '#3388ff'
                },
                barWidth: '60%'  // 调小柱条宽度
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_6() {
        var myChart = echarts.init(document.getElementById('echart6'));

        // 浅色多彩配色方案（适配蓝底背景）
        const pastelColors = [
            '#8BD3E6', // 浅天蓝
            '#A0E6A0', // 薄荷绿
            '#FFD8A1', // 浅橙黄
            '#F4B5E6', // 粉紫色
            '#A8D8EA'  // 冰蓝色
        ];

        const option = {

            backgroundColor: 'transparent', // 透明背景
            title: {
                text: '造纸术的应用占比情况',
                left: 'center',
                textStyle: {
                    color: '#fff' // 标题文字白色
                },
                subtextStyle: {
                    color: 'rgba(255,255,255,0.8)' // 副标题浅白色
                }
            },
            tooltip: {
                trigger: 'item',
                backgroundColor: 'rgba(0,0,50,0.9)', // 深蓝底色提示框
                textStyle: {
                    color: '#fff'
                }
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                textStyle: {
                    color: '#fff', // 图例文字白色
                    fontSize: 14
                },
                itemGap: 12 // 增加图例间距
            },
            series: [{
                name: '造纸术的应用占比情况',
                type: 'pie',
                radius: ['40%', '70%'], // 环形饼图
                center: ['55%', '55%'],//中间左右，垂直上下
                color: pastelColors, // 应用配色方案
                label: {
                    color: '#fff', // 标签文字白色
                    fontSize: 14,
                    formatter: '{b}\n{d}%',
                    textShadowColor: 'rgba(0,0,0,0.5)', // 添加文字阴影
                    textShadowBlur: 2
                },
                itemStyle: {
                    borderWidth: 2,
                    borderColor: 'rgba(255,255,255,0.3)' // 浅白边框
                },
                data: [
                    { value: 35, name: '文化教育领域' },
                    { value: 30, name: '包装领域' },
                    { value: 20, name: '生活用纸领域' },
                    { value: 10, name: '技术与工业领域' },
                    { value: 5, name: '艺术与收藏领域' },

                ],
                emphasis: {
                    scale: true, // 放大效果
                    scaleSize: 5,
                    itemStyle: {
                        shadowBlur: 20,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(255,255,255,0.3)' // 白色阴影
                    },
                    label: {
                        show: true,
                        fontSize: 16
                    }
                }
            }]
        };


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('echart7'));

    //     option = {

    //         tooltip: {
    //             trigger: 'item',
    //             formatter: '{a} <br/>{b} : {c} ({d}%)'
    //         },
    //         legend: {
    //             left: 'center',
    //             top: 'bottom',
    //             data: [
    //                 'rose1',
    //                 'rose2',
    //                 'rose3'
    //             ]
    //         },

    //         series: [
    //             {
    //                 name: '指南针的现代应用',
    //                 type: 'pie',
    //                 radius: [1, 75],
    //                 center: ['25%', '50%'],
    //                 roseType: 'radius',
    //                 itemStyle: {
    //                     borderRadius: 5
    //                 },
    //                 label: {
    //                     show: false
    //                 },
    //                 // emphasis: {
    //                 //     label: {
    //                 //         show: true
    //                 //     }
    //                 // },

    //                 data: [
    //                     { value: 30, name: '出版印刷', itemStyle: { color: '#FF6666' } },
    //                     { value: 30, name: '包装行业', itemStyle: { color: '#FF9966' } },
    //                     { value: 15, name: '工业生产', itemStyle: { color: '#FFCC66' } },
    //                     { value: 10, name: '生活用纸 ', itemStyle: { color: '#FFFF66' } },
    //                     { value: 10, name: '文化与艺术', itemStyle: { color: '#CCFF66' } },
    //                     { value: 5, name: '其他', itemStyle: { color: '#66CCFF' } }
    //                 ]
    //             },

    //         ]
    //     };


    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     window.addEventListener("resize", function () {
    //         myChart.resize();
    //     });
    // }





})


function initChartInteractions() {
    let isAnimating = false;
    $('.chart').on('click', function (e) {
        e.stopPropagation();
        const $chart = $(this);
        isAnimating = true;

        if ($chart.hasClass('active')) {
            $chart.removeClass('active');
            $chart.css({
                width: '',
                height: ''
            });
        } else {
            const originalWidth = $chart.width();
            const originalHeight = $chart.height();

            $chart.css({
                width: originalWidth + 'px',
                height: originalHeight + 'px'
            });

            $chart.addClass('active');
            const chartId = $chart.attr('id');
            const chartInstance = echarts.getInstanceByDom(document.getElementById(chartId));
            setTimeout(() => chartInstance.resize(), 300);
        }
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.chart').length) {
            $('.chart').removeClass('active');
        }
    });

    $(window).on('resize', function () {
        $('.chart.active').each(function () {
            const chartInstance = echarts.getInstanceByDom(this);
            chartInstance && chartInstance.resize();
        });
    });
}

$(window).on('load', function () {
    $(".loading").fadeOut();

    setTimeout(() => {
        initChartInteractions();

        $('.chart').css({
            animation: 'chartBreath 3s ease-in-out infinite'
        });
    }, 1000);
});

// 添加背景样式和呼吸动画
const style = document.createElement('style');
style.textContent = `
    .chart {
        background: linear-gradient(135deg, rgba(12,36,97,0.9) 0%, rgba(25,25,112,0.9) 100%);
        border-radius: 15px;
        position: relative;
        z-index: 2;
        backdrop-filter: blur(5px);
        border: 1px solid rgba(0,255,255,0.2);
    }
    
    @keyframes chartBreath {
        0% { 
            box-shadow: 0 0 5px rgba(0,255,255,0.2);
            transform: scale(1);
        }
        50% { 
            box-shadow: 0 0 25px rgba(0,255,255,0.4);
            transform: scale(1.02);
        }
        100% { 
            box-shadow: 0 0 5px rgba(0,255,255,0.2);
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

















