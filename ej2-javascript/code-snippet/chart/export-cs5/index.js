var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        title: 'Manager',
        valueType: 'Category',
        majorGridLines: { width: 0 }

    },
    //Initializing Primary Y Axis
    primaryYAxis:
    {
        title: 'Sales',
        minimum: 0,
        maximum: 20000,
        majorGridLines: { width: 0 }
    },
    //Initializing Chart Series
    series: [
        {
            type: 'Column',
            dataSource: [{ x: 'John', y: 10000 }, { x: 'Jake', y: 12000 }, { x: 'Peter', y: 18000 },
            { x: 'James', y: 11000 }, { x: 'Mary', y: 9700 }],
            xName: 'x', width: 2,
            yName: 'y'
        }
    ],
    //Initializing Chart title
    title: 'Sales Comparision',
}, '#element');


let mode = new ej.dropdowns.DropDownList({
    index: 0,
    width: 90
});
mode.appendTo('#mode');
document.getElementById('print').onclick = () => {
    let fileName = ((document.getElementById('fileName'))).value;
    chart.exportModule.export(mode.value, fileName);
};

