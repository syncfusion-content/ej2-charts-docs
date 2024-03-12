var circularchart = new ej.charts.CircularChart3D({
    series: [
        {
            dataSource: [
                { x: 'Jan', y: 3 },  { x: 'Feb', y: 3.5 }, 
                { x: 'Mar', y: 7 },  { x: 'Apr', y: 13.5 },
                { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, 
                { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
                { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }
            ],
            xName: 'x',
            yName: 'y',
            radius: '100%'
        }
    ],
    tilt: -45,
    legendSettings: { visible: false }
}, '#element');

document.getElementById('export').onclick = () => {
    circularchart.exportModule.export('PNG', 'result');
};