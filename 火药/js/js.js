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
                text: '火药历史影响力趋势',
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
                data: ['唐朝', '宋朝', '元朝', '14 世纪', '19 世纪'],
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
                    data: [10, 30, 40, 45, 60],
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
                            { name: '传到了阿拉伯地区', coord: ['唐朝', 10] },
                            { name: '新型火药武器不断涌现', coord: ['19 世纪', 60] }
                        ],
                        label: {
                            color: '#000'  // 标注文字黑色
                        }
                    }
                },
                {
                    name: '中国影响度',
                    type: 'line',
                    data: [30, 50, 60, 65, 30],
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
                            { name: '火药的发明', coord: ['唐朝', 30] },
                            { name: '遭受西方列强的侵略', coord: ['19 世纪', 30] }
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
                text: '火药应用对经济贸易的影响 (唐朝-19世纪)',
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
                data: ['宋初', '13世纪', '17世纪', '1888年', '现今'],
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
                    data: [30, 40, 50, 60, 600],
                    smooth: true,
                    lineStyle: { color: '#ff6b6b', width: 3 },
                    symbol: 'circle',
                    symbolSize: 8,
                    markPoint: {
                        data: [
                            { name: '火药开始用于军事并不断发展', coord: ['宋初', 30] },
                            { name: '新型火药', coord: ['现今', 600] }
                        ]
                    }
                },
                {
                    name: '全球海上贸易额',
                    type: 'line',
                    data: [100, 150, 500, 800, 2000,],
                    smooth: true,
                    lineStyle: { color: '#18d627', width: 3 },
                    symbol: 'triangle',
                    itemStyle: { color: '#18d627' },
                    symbolSize: 8,
                    markPoint: {
                        data: [
                            { name: '火药已开始用于军事', coord: ['宋初', 100] },
                            { name: '具有国际影响的火药发明家', coord: ['现今', 2000] }
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
            earlyGunpowder: 'early-gunpowder.jpg', // 早期火药图片
            spreadGunpowder: 'spread-gunpowder.jpg', // 火药传播图片
            gunpowderWeapon: 'gunpowder-weapon.jpg', // 火药武器图片
            modernGunpowder: 'modern-gunpowder.jpg' // 现代火药图片
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
                        name: '火药的早期发明',
                        value: [850, 1],
                        desc: '唐朝时期，中国发明了火药，最初用于制作烟花和简单的爆炸物。',
                        // symbol: 'image://' + images.movableType // 使用本地图片路径
                        symbol: 'image://https://ts1.tc.mm.bing.net/th/id/R-C.9c50cc9de477ff6e92932e4c7fce722e?rik=T8arQYdtEOoGeQ&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20180416%2fece4b1f4e204404d92afc99a2cdfd894.jpeg&ehk=bB%2bXlvIu%2bZ9plkPQIweJVIJoKC0J1hYhkVlEg3fxRbo%3d&risl=&pid=ImgRaw&r=0' // 替代图片
                    },
                    {
                        name: '火药传播到欧洲',
                        value: [1200, 1],
                        desc: '13世纪，火药技术传入欧洲，通过丝绸之路和贸易路线传播。',
                        // symbol: 'image://' + images.gutenberg // 使用本地图片路径
                        symbol: 'image://https://ts1.tc.mm.bing.net/th/id/R-C.60355cce8611644e27ee207874007f95?rik=Dxv%2bC0J6lw3fSg&riu=http%3a%2f%2fthumb.1010pic.com%2fpic3%2fquiz%2fimages%2f201611%2f150%2ffe0604c6.png&ehk=Oc%2bcIALpsEkRhik2DzGyCuQRl86JmcDgInxDcjyjyBs%3d&risl=&pid=ImgRaw&r=0' // 替代图片
                    },
                    {
                        name: '火药武器的广泛应用',
                        value: [1500, 1],
                        desc: '16世纪，火药武器（如火炮和火枪）在欧洲广泛应用于战争，改变了军事格局。',
                        symbol: 'image://https://p4.itc.cn/q_70/images03/20210316/130b7e72793c40f8b29c37e7726c80c6.png' // 替代图片
                    },
                    {
                        name: '现代火药技术的改进',
                        value: [1800, 1],
                         desc: '19世纪，现代火药技术进一步发展，硝化甘油和无烟火药的发明提高了安全性和威力。',
                        // symbol: 'image://' + images.printingPress // 使用本地图片路径
                        symbol: 'image://https://n.sinaimg.cn/sinakd20122/713/w1024h489/20230418/79ec-3eba5b87ba8be2ee7e08f61ce33c9e76.jpg' // 替代图片
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
                data: ['烟花爆竹', '工业采矿炸药', '军用弹药（含火药）', '民用狩猎弹药', '模型火箭发动机', '工业雷管'],
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
                data: [215, 182, 175, 68, 4.3, 3.8],
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
                text: '火药的应用占比情况',
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
                name: '火药的应用占比情况',
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
                    { value: 40, name: '军事' },
                    { value: 30, name: '工业' },
                    { value: 15, name: '烟花爆竹' },
                    { value: 10, name: '体育' },
                    { value: 5, name: '科学研究领域' },

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




















