


import { BulletChart, BulletTooltip } from '@syncfusion/ej2-charts';
BulletChart.Inject(BulletTooltip);

let chart: BulletChart = new BulletChart({
        title: 'Sales Rate',
        subtitle: '(in dollars $)',
        dataSource: [
                { value: 55, target: 45, category: 'Year 1' },
        ],
        animation: { enable: false },
        targetField: 'target',
        valueField: 'value',
        titlePosition: 'Right',
        labelFormat: '${value}',
        ranges: [{ end: 35 },
        { end: 50 },
        { end: 100 }
        ],
        minimum: 0, maximum: 100, interval: 20
}, '#element');



