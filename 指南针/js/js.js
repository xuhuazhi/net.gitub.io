$(window).load(function () {
    $(".loading").fadeOut()
})
$(function () {
    echarts_21();
    echarts_22();
    echarts_4();
    echarts_5();
    echarts_6();

    function echarts_21() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart21'));

        option1 = {
            title: {
                text: '指南针历史影响力趋势',
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
                data: ['战国', '宋朝', '元朝', '明朝', '大航海', '现代'],
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
                    data: [0, 20, 40, 70, 95, 85],
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
                            { name: '传入欧洲', coord: ['元朝', 40] },
                            { name: '地理大发现', coord: ['大航海', 95] }
                        ],
                        label: {
                            color: '#000'  // 标注文字黑色
                        }
                    }
                },
                {
                    name: '中国影响度',
                    type: 'line',
                    data: [30, 80, 60, 90, 60, 75],
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
                            { name: '郑和下西洋', coord: ['明朝', 90] },
                            { name: '现代应用', coord: ['现代', 75] }
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
                text: '指南针应用对经济贸易的影响 (1200-1700)',
                left: 'center', // 标题居中
                textStyle: { color: '#fff', fontSize: 18 }
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>' +
                        '中国：' + params[0].value + '万两<br/>' +
                        '世界：' + params[1].value + '万两';
                }
            },
            legend: {
                data: ['中国海上贸易额', '全球海上贸易额'],
                textStyle: { color: '#fff' },
                top: 35
            },
            xAxis: {
                type: 'category',
                data: ['1200(宋)', '1300(元)', '1400(明初)', '1500(明中)', '1600(明末)', '1700(清初)'],
                axisLabel: { color: '#fff', fontSize: 12 }, // x轴坐标颜色也设为白色
                axisLine: { lineStyle: { color: '#fff' } }
            },
            yAxis: {
                type: 'value',
                name: '贸易额 (万两白银)',
                nameTextStyle: { color: '#fff' },
                axisLabel: { color: '#fff' },
                splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
            },
            series: [
                {
                    name: '中国海上贸易额',
                    type: 'line',
                    data: [80, 150, 600, 1200, 800, 500],
                    smooth: true,
                    lineStyle: { color: '#ff6b6b', width: 3 },
                    symbol: 'circle',
                    symbolSize: 8,
                    markPoint: {
                        data: [
                            { name: '郑和首航', coord: ['1400(明初)', 600] },
                            { name: '隆庆开关', coord: ['1500(明中)', 1200] }
                        ]
                    }
                },
                {
                    name: '全球海上贸易额',
                    type: 'line',
                    data: [120, 180, 300, 2500, 4800, 6500],
                    smooth: true,
                    lineStyle: { color: '#18d627', width: 3 },
                    symbol: 'triangle',
                    itemStyle: { color: '#18d627' },
                    symbolSize: 8,
                    markPoint: {
                        data: [
                            { name: '哥伦布航行', coord: ['1500(明中)', 2500] },
                            { name: '东印度公司', coord: ['1600(明末)', 4800] }
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
    let myChart = null;
    let resizeHandler = null;

    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

        // 假设images对象中包含图片路径
        var images = {
            earlyCompass: 'early-compass.jpg', // 早期指南针图片
            magneticCompass: 'magnetic-compass.jpg', // 磁性指南针图片
            modernCompass: 'modern-compass.jpg' // 现代指南针图片
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
                        name: '早期指南针',
                        value: [200, 1],
                        desc: '中国汉朝时期，发明了早期的指南针，称为司南，用于风水和导航。',
                        // symbol: 'image://' + images.movableType // 使用本地图片路径
                        symbol: 'image://https://tse3-mm.cn.bing.net/th/id/OIP-C.wcLDcGITV5ugQ1z7UX4XMAHaDy?rs=1&pid=ImgDetMain' // 替代图片
                    },
                    {
                        name: '磁性指南针',
                        value: [1000, 1],
                        desc: '中国宋代，发明了磁性指南针，用于航海导航，极大地促进了海上贸易。',
                        // symbol: 'image://' + images.gutenberg // 使用本地图片路径
                        symbol: 'image://https://bpic.588ku.com/back_origin_min_pic/23/06/10/de10ad8b058a9c4de3e72ba2c914c39d.jpg!/fw/750/quality/99/unsharp/true/compress/true' // 替代图片
                    },
                    {
                        name: '现代指南针',
                        value: [1900, 1],
                        desc: '20世纪，现代指南针技术进一步发展，广泛应用于航海、航空和野外探险。',
                        // symbol: 'image://' + images.printingPress // 使用本地图片路径
                        symbol: 'image://https://tse4-mm.cn.bing.net/th/id/OIP-C.u68Cn3XizZSnUAYvee7u8wHaE7?rs=1&pid=ImgDetMain' // 替代图片
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
            // 新增 title 配置（居中的标题）
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
                top: '10%',     // 保持原有布局（标题在 grid 上方）
                left: '10%',
                right: '5%',
                bottom: '30%'
            },
            xAxis: {
                type: 'category',
                data: ['Ranger指北针', '62式指北罗盘仪', '表扣式指北针', 'Naturehike指北针', '迪卡侬Racer指北针', 'Naturehike指南针'],
                axisLabel: {
                    color: '#fff',
                    rotate: 45,
                    fontSize: 12,
                    interval: 0,
                    align: 'right',
                    margin: 20,
                    verticalAlign: 'middle'
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisTick: {
                    alignWithLabel: true
                }
            },
            yAxis: {
                type: 'value',
                name: '(单位：亿)',
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
                data: [1801, 1406, 1235, 956, 623, 451],
                type: 'bar',
                itemStyle: {
                    color: '#3388ff'
                },
                barWidth: '60%'
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
                text: '指南针的应用占比情况',
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
                name: '指南针的应用占比情况',
                type: 'pie',
                radius: ['40%', '70%'], // 环形饼图
                center: ['60%', '56%'],//中间左右，垂直上下
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
                    { value: 35, name: '户外探险' },
                    { value: 25, name: '航海与航空' },
                    { value: 18, name: '军事与安防' },
                    { value: 12, name: '教育与科研' },
                    { value: 10, name: '城市与日常应用' },

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
    // function echarts_7() {
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
    //                 emphasis: {
    //                     label: {
    //                         show: true
    //                     }
    //                 },
    //                 data: [
    //                     { value: 50, name: '导航设备', itemStyle: { color: '#FF9966' } },
    //                     { value: 30, name: '军事与航天航空', itemStyle: { color: '#FFCC99' } },
    //                     { value: 20, name: '户外运动与教育', itemStyle: { color: '#FFFF99' } }
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
        z-index: 1;
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











