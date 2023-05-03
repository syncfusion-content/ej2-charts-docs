var chart = new ej.charts.BulletChart({
        majorTickLines: { color: 'blue', width: 5 },
        minorTickLines: {width: 4, color: 'red'},
        dataSource: [{ value: 23, target: 22 }],
        animation: { enable: false },
        valueField: 'value',
        targetField: 'target',
        ranges: [{ end: 20 },
            { end: 25 },
            { end: 30 }
        ],
        minimum: 0, maximum: 30, interval: 5
}, '#element');


