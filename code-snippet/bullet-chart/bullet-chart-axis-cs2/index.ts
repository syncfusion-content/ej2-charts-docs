


import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);
let chart: BulletChart = new BulletChart({
        // To place the ticks inside of the bullet-chart
        tickPosition: 'Inside',
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



