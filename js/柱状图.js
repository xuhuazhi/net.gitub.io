const inventions = ['造纸术', '印刷术', '火药', '指南针'];
const appCounts = [5, 4, 3, 2];
const contributions = [35, 30, 20, 15];

// ECharts 配置
const chart = echarts.init(document.getElementById('main'));
const option = {
    title: {
        text: '四大发明应用与贡献分析',
        subtext: '数据来源：历史文献综合统计',
        left: 'center',
        textStyle: {
            top: 10,
            fontSize: 25,
            color: '#ff4757',  // 改为鲜艳的珊瑚红色
            fontWeight: 'bold'
        },
        subtextStyle: {
            color: '#FFFFFF',
            fontSize: 16,

        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        formatter: params => {
            return `${params[0].name}<br/>
                    ${params[0].marker} ${params[0].seriesName}: ${params[0].value}<br/>
                    ${params[1].marker} ${params[1].seriesName}: ${params[1].value}%`
        }
    },
    legend: {
        data: ['应用领域数量', '贡献度指数'],
        top: 55,
        icon: 'circle',
        itemWidth: 12,
        textStyle: { color: '#FFFFFF' },
        fontSize: 12,
    },
    grid: {
        top: 100,
        left: 60,
        right: 60,
        bottom: 40
    },
    xAxis: {
        type: 'category',
        data: inventions,
        axisLabel: {
            color: '#FFFFFF',  // 加深文字颜色提升对比度
            fontSize: 16,      // 调大字号
            fontWeight: 'bold' // 加粗字体
        },
        axisLine: { lineStyle: { color: '#bdc3c7' } }
    },
    yAxis: [{
        type: 'value',
        name: '应用领域数量',
        nameTextStyle: { color: '#2980b9' },
        axisLabel: { color: '#2980b9' },
        splitLine: { lineStyle: { type: 'dashed' } }
    }, {
        type: 'value',
        name: '贡献度 (%)',
        nameTextStyle: { color: '#27ae60' },
        axisLabel: { color: '#27ae60' },
        splitLine: { show: false }
    }],
    series: [{
        name: '应用领域数量',
        type: 'bar',
        data: appCounts,
        barWidth: 40,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#ff6b6b' }, // 改为鲜艳的珊瑚红
                { offset: 1, color: '#ff4757' }
            ]),
            borderRadius: [6, 6, 0, 0]
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 15,
                shadowColor: 'rgba(255,71,87,0.5)'
            }
        }
    }, {
        name: '贡献度指数',
        type: 'bar',
        yAxisIndex: 1,
        data: contributions,
        barWidth: 30,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#2ed573' }, // 改为鲜艳的苹果绿
                { offset: 1, color: '#1dd1a1' }
            ]),
            borderRadius: [6, 6, 0, 0]
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 15,
                shadowColor: 'rgba(46,213,115,0.5)'
            }
        }
    }]
};

// 保持响应式配置不变
window.addEventListener('resize', () => chart.resize());
chart.setOption(option);