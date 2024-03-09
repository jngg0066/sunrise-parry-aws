document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Skin Cancer Trend From 2013-2023'
    },
    xAxis: {
        categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    },
    yAxis: {
        title: {
            text: 'Count'
        },
    },
    series: [{
        name: 'Melanoma',
        marker: {
            symbol: 'square'
        },
        data: [6500, 5872, 5992, 5128, 5684, 5640, 5636, 5664, 5820, 5372, 5256]

    }, {
        name: 'Non-Melanoma',
        marker: {
            symbol: 'diamond'
        },
        data: [2396, 2428, 2540, 2724, 2568, 2660, 2692, 2914, 3060, 3092, 3164]
    }]
});
});