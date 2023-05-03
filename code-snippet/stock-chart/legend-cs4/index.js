var stockChart = new ej.charts.StockChart({
        primaryXAxis: {
            valueType: 'DateTime'
        },
        indicatorType : [],
        trendlineType : [],
        series: [
            {
                type: 'Candle',
                dataSource: chartData,
                name: 'China',
                legendShape: 'Pentagon'
            }],
        title: 'Unemployment Rates 1975-2010',
        tooltip: {enable: true},
        legendSettings: { visible: true }
});
stockChart.appendTo('#element');

