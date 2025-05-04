$(window).load(function () {
    $(".loading").fadeOut()
})
$(function () {
    echarts_21();
    echarts_22();
    echarts_4();
    echarts_5();
    echarts_6();
    // echarts_7();
    function echarts_21() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart21'));

        option1 = {
            title: {
                text: '印刷术历史影响力趋势',
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
                data: ['唐朝', '北宋', '元朝', '明清', '现代'],
                axisLabel: {
                    fontSize: 12,
                    color: '#fff',  // X轴标签白色
                    fontWeight: 'bold',
                    interval: 0,
                    rotate: 0,
                    fontStyle: 'normal'
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
                    data: [10, 25, 40, 60, 90],
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
                            { name: '传入欧洲', coord: ['唐朝', 10] },
                            { name: '地理大发现', coord: ['现代', 95] }
                        ],
                        label: {
                            color: '#000'  // 标注文字黑色
                        }
                    }
                },
                {
                    name: '中国影响度',
                    type: 'line',
                    data: [90, 75, 60, 50, 70],
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
                            { name: '郑和下西洋', coord: ['唐朝', 90] },
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
                text: '印刷术应用对经济贸易的影响 (1200-1700)',
                left: 'center', // 标题居中
                textStyle: { color: '#fff', fontSize: 18 }
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0].name + '<br/>' +
                        '中国：' + params[0].value + '亿元<br/>' +
                        '世界：' + params[1].value + '亿元';
                }
            },
            legend: {
                data: ['中国海上贸易额', '全球海上贸易额'],
                textStyle: { color: '#fff' },
                top: 35
            },
            xAxis: {
                type: 'category',
                data: ['1000(北宋)', '1100(北宋)', '1200(宋)', '1300(元)', '1400(明初)', '1500(明中)'],
                axisLabel: { color: '#fff', fontSize: 12 }, // x轴坐标颜色也设为白色
                axisLine: { lineStyle: { color: '#fff' } }
            },
            yAxis: {
                type: 'value',
                name0: '贸易额 (亿元)',
                nameTextStyle: { color: '#fff' },
                axisLabel: { color: '#fff' },
                splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } }
            },
            series: [
                {
                    name: '中国海上贸易额',
                    type: 'line',
                    data: [10, 15, 20, 25, 30, 35],
                    smooth: true,
                    lineStyle: { color: '#ff6b6b', width: 3 },
                    symbol: 'circle',
                    symbolSize: 8,

                    markPoint: {
                        data: [
                            { name: '印刷品的出现', coord: ['1000(北宋)', 10] },
                            { name: '促进海上贸易的发展', coord: ['1500(明中)', 35] }
                        ]
                    }
                },
                {
                    name: '全球海上贸易额',
                    type: 'line',
                    data: [40, 50, 65, 80, 100, 115],
                    smooth: true,
                    lineStyle: { color: '#18d627', width: 3 },
                    symbol: 'triangle',
                    itemStyle: { color: '#18d627' },
                    symbolSize: 8,
                    markPoint: {
                        data: [
                            { name: '哥伦布航行', coord: ['1000(北宋)', 40], itemStyle: { color: '#18d627' } },
                            { name: '东印度公司', coord: ['1500(明中)', 115], itemStyle: { color: '#18d627' } }
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
            movableType: 'movable-type.jpg', // 活字印刷图片
            gutenberg: 'gutenberg.jpg',     // 古腾堡金属活字印刷机图片
            printingPress: 'printing-press.jpg' // 现代印刷机图片
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
                    color: '#ffffff' // 时间轴标题颜色
                },
                axisLine: { 
                    lineStyle: { 
                        color: '#eee', // 设置时间轴线条颜色为浅灰色
                        width: 2        // 设置时间轴线条宽度
                    }
                },
                axisLabel: {
                    formatter: function (value) {
                        return value < 0 ? Math.abs(value) + ' BC' : value + ' 年';
                    },
                    color: '#ffffff', // 设置时间标签颜色为浅灰色
                    fontSize: 12
                },
                axisTick: { // 显示刻度线
                show: true,
                lineStyle: {
                    color: '#eee', // 刻度线颜色设置为浅灰色
                    width: 1       // 刻度线宽度设置为1
                },
                length: 5          // 刻度线长度设置为5
            },
            splitLine: { // 显示分割线
                show: true,
                lineStyle: {
                    color: '#eee', // 分割线颜色设置为浅灰色
                    width: 1,      // 分割线宽度设置为1
                    length: 5      // 分割线长度设置为5
                }
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
                        name: '毕昇活字印刷术',
                        value: [1041, 1],
                        desc: '中国北宋时期，毕昇发明了胶泥活字印刷术，标志着印刷技术的重大突破',
                        // symbol: 'image://' + images.movableType // 使用本地图片路径
                        symbol: 'image://https://ts1.tc.mm.bing.net/th/id/R-C.11f69909fc53c8f573b9bbbb90f75e9d?rik=zmVVia5CkD409A&riu=http%3a%2f%2fk.sinaimg.cn%2fn%2fsinacn%2fw500h358%2f20171226%2f0a7a-fypyuvc1268576.jpg%2fw700d1q75cms.jpg&ehk=lvy7DSvqTWrYygJ8O7tUqLp5ZQT2pDSqnNP3mbffxGk%3d&risl=&pid=ImgRaw&r=0' // 替代图片
                    },
                    {
                        name: '古腾堡金属活字印刷机',
                        value: [1440, 1],
                        desc: '德国约翰内斯·古腾堡发明了金属活字印刷机，使书籍大规模生产成为可能',
                        // symbol: 'image://' + images.gutenberg // 使用本地图片路径
                        symbol: 'image://https://ts1.tc.mm.bing.net/th/id/R-C.b9559a3f08cae8586ea6948742ba59db?rik=ltBWmvtdiI16Jw&riu=http%3a%2f%2fwww.chinawriter.com.cn%2fNMediaFile%2f2020%2f0417%2fMAIN202004170844000570961855905.png&ehk=rKp4%2frty3Dn6%2blwHouAb7al80cF7AjLYQNBOMLM6JPs%3d&risl=&pid=ImgRaw&r=0' // 替代图片
                    },
                    {
                        name: '现代印刷机的自动化',
                        value: [1800, 1],
                        desc: '工业革命期间，印刷机改进为蒸汽动力并实现自动化，提高印刷速度和效率',
                        // symbol: 'image://' + images.printingPress // 使用本地图片路径
                        symbol: 'image://https://tse1-mm.cn.bing.net/th/id/OIP-C.zxHw_cZTmQ-Pa3PimjPzvAHaE7?rs=1&pid=ImgDetMain' // 替代图片
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
                data: ['烟标印刷', '彩色纸包装印刷', '书刊印刷', '彩印纸盒', '社会产品印刷', '票据印刷'],
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
                data: [33.5, 15.2, 9.7, 7.93, 6.1, 4.5],
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
                text: '印刷术的应用占比情况',
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
                name: '印刷术的应用占比情况',
                type: 'pie',
                radius: ['40%', '70%'], // 环形饼图
                center: ['55%', '56%'],//中间左右，垂直上下
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
                    { value: 30, name: '出版业' },
                    { value: 25, name: '包装印刷' },
                    { value: 20, name: '广告印刷' },
                    { value: 15, name: '电子领域' },
                    { value: 10, name: '纺织和装饰' },

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
    //                 // emphasis: {
    //                 //     label: {
    //                 //         show: true
    //                 //     }
    //                 // },
    //                 data: [
    //                     { value: 30, name: '出版业', itemStyle: { color: '#18d627' } },
    //                     { value: 25, name: '包装印刷', itemStyle: { color: '#ff6b6b' } },
    //                     { value: 20, name: '广告与宣传', itemStyle: { color: '#4ecdc4' } },
    //                     { value: 15, name: '电子与数字媒体', itemStyle: { color: '#ffbe0b' } },
    //                     { value: 10, name: '其他领域', itemStyle: { color: '#a6c0fe' } }
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





















