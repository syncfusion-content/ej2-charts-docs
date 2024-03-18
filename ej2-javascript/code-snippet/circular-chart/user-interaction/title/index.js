var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Saudi Arabia', y: 58 },
                { x: 'Persian Gulf', y: 15 },
                { x: 'Canada', y: 13 },
                { x: 'Venezuela', y: 8 },
                { x: 'Mexico', y: 3 },
                { x: 'Russia', y: 2 },
                { x: 'Miscellaneous', y: 1 }
            ],
            xName: 'x',
            yName: 'y'
        }
    ],
    tilt: -45,
    title: 'Oil and other liquid imports in USA',
    legendSettings: { visible: false }
}, '#element');

