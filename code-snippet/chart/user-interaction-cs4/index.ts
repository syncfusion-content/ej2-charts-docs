


import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        height: '110px',
        tooltip: { enable: true, fill: 'red', border:{ color: 'green', width: 10 } },
        dataSource: [{ value: 70, target: 50 }],
        valueField: 'value',
        targetField: 'target',
        animation: { enable: false },
        ranges: [{ end: 30, color: '#599C20' },
        { end: 60, color: '#EFC820' },
        { end: 100, color: '#CA4218' }
        ],
        minimum: 0, maximum: 100, interval: 10,
        title: 'Revenue YTD',
        labelFormat: '${value}K'
}, '#element');



