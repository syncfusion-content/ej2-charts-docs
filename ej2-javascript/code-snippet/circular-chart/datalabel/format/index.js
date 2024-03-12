var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 13, text: 'Jan: 3' },
                { x: 'Feb', y: 13, text: 'Feb: 3.5' },
                { x: 'Mar', y: 7, text: 'Mar: 7' },
                { x: 'Apr', y: 13, text: 'Apr: 13.5' }
            ],
            xName: 'x',
            yName: 'y',
            dataLabel: {
                visible: true,
                format: 'n2'
            }
        }
    ],
    tilt: -45,
    legendSettings: {
        visible: false
    }
}, '#element');

