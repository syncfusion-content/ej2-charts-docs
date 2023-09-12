export let data: Object[] = [{ x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
{ x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
    { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }, { x: 'Nov', y: 15 }, { x: 'Dec', y: 15 }];

export let dataMapping: Object[] = [{ x: 'Jan', y: 3, fill: '#498fff', text:'January' }, { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
    { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' }, { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }];
    
export let pyramidData: object[] = [{ x: 'Australia', y: 20, text: 'Australia 20%' }, { x: 'France', y: 22, text: 'France 22%' }, { x: 'China', y: 23, text: 'China 23%' },
    { x: 'India', y: 24, text: 'India 24%' }, { x: 'Japan', y: 25, text: 'Japan 25%' }, { x: 'Germany', y: 27, text: 'Germany 27%' }];

export let funnelData: object[] = [{ x: 'Renewed', y: 18.20, text: 'Renewed 18.20%' }, { x: 'Subscribe', y: 27.3, text: 'Subscribe 27.3%' },
    { x: 'Support', y: 55.9, text: 'Support 55.9%' },{ x: 'Downloaded', y: 76.8, text: 'Downloaded 76.8%' },
    { x: 'Visited', y: 100, text: 'Visited 100%' }];

export let labelData: Object[] = [{ x: 'Jan', y: 13, text: 'Jan: 13' }, { x: 'Feb', y: 13, text: 'Feb: 13' },
    { x: 'Mar', y: 17, text: 'Mar: 17' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }];

export let numData: object[] = [{ x: 2005, y: 28, color: 'red', error: 4, y1: 22 }, { x: 2006, y: 25, color: 'blue', error: 3, y1:28 },{ x: 2007, y: 26, color: 'green', error: 1, y1: 30 }, { x: 2008, y: 27, color: 'orange', error: 5, y1: 35 },
    { x: 2009, y: 32, color: 'yellow', error: 7, y1: 30 }, { x: 2010, y: 35, color: 'grey', error: 2, y1: 32 }, { x: 2011, y: 30, color: 'brown', error: 6, y1: 25 }];

export let polarCategory: object[] = [{ x: 'Jan', y: -1 }, { x: 'Feb', y: -1 }, { x: 'Mar', y: 2 },{ x: 'Apr', y: 8 }, { x: 'May', y: 13 }, { x: 'Jun', y: 18 }, { x: 'Jul', y: 21 }, 
    { x: 'Aug', y: 20 }, { x: 'Sep', y: 16 }, { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 }, { x: 'Dec', y: 0 }];

export let stackedData: object[] = [{ x: 2000, y: 0.61, y1: 0.03, y2: 0.48},{ x: 2001, y: 0.81, y1: 0.05, y2: 0.53 },
    { x: 2002, y: 0.91, y1: 0.06, y2: 0.57 },{ x: 2003, y: 1, y1: 0.09, y2: 0.61 }, { x: 2004, y: 1.19, y1: 0.14, y2: 0.63 },
    { x: 2005, y: 1.47, y1: 0.20, y2: 0.64 },{ x: 2006, y: 1.74, y1: 0.29, y2: 0.66 }, { x: 2007, y: 1.98, y1: 0.46, y2: 0.76 },
    { x: 2008, y: 1.99, y1: 0.64, y2: 0.77 },{ x: 2009, y: 1.70, y1: 0.75, y2: 0.55 }];

export let columnData: object[] = [{ country: "USA", gold: 50, silver: 25 }, { country: "China", gold: 40, silver: 30 }, { country: "Japan", gold: 70, silver: 60 },
    { country: "Australia", gold: 60, silver: 50 }, { country: "France", gold: 50, silver: 45 }, { country: "Germany", gold: 40, silver: 45 },
    { country: "Italy", gold: 40, silver: 45 },{ country: "Sweden", gold: 30, silver: 25 }];

export let cylindricalData: object[] = [{ country: "USA", gold: 50 }, { country: "Japan", gold: 70 }, { country: "Australia", gold: 60 }, { country: "France", gold: 50 },
    { country: "Italy", gold: 40 }, { country: "Sweden", gold: 55 }];

export let hocData: object[] = [ { x: 'Jan', open: 120, high: 160, low: 100, close: 140 }, { x: 'Feb', open: 150, high: 190, low: 130, close: 170 },
    { x: 'Mar', open: 130, high: 170, low: 110, close: 150 },{ x: 'Apr', open: 160, high: 180, low: 120, close: 140 },
    { x: 'May', open: 150, high: 170, low: 110, close: 130 }];

export let boxPlot: object[] = [{ x: 'Development', y: [22, 22, 23, 25, 25, 25, 26, 27, 27, 28, 28, 29, 30, 32, 34, 32, 34, 36, 35, 38] },
    { x: 'Testing', y: [22, 33, 23, 25, 26, 28, 29, 30, 34, 33, 32, 31, 50] },
    { x: 'HR', y: [22, 24, 25, 30, 32, 34, 36, 38, 39, 41, 35, 36, 40, 56] },
    { x: 'Finance', y: [26, 27, 28, 30, 32, 34, 35, 37, 35, 37, 45] },
    { x: 'R&D', y: [26, 27, 29, 32, 34, 35, 36, 37, 38, 39, 41, 43, 58] },
    { x: 'Sales', y: [27, 26, 28, 29, 29, 29, 32, 35, 32, 38, 53] },
    { x: 'Inventory', y: [21, 23, 24, 25, 26, 27, 28, 30, 34, 36, 38] },
    { x: 'Graphics', y: [26, 28, 29, 30, 32, 33, 35, 36, 52] },
    { x: 'Training', y: [28, 29, 30, 31, 32, 34, 35, 36] }
];

export let waterFall: object[] = [{ x: 'Income', y: 4711 }, { x: 'Sales', y: -1015 }, { x: 'Development', y: -688 },
    { x: 'Revenue', y: 1030 }, {x: 'Balance'}, { x: 'Administrative', y: -780 }, { x: 'Expense', y: -361 }, { x: 'Tax', y: -695 },
    { x: 'Net Profit'}];

export let bubbleData: object[] = [{ x: 92.2, y: 7.8, size: 1.347, text: 'China' },
{ x: 74, y: 6.5, size: 1.241, text: 'India' },
{ x: 90.4, y: 6.0, size: 0.238, text: 'Indonesia' },
{ x: 99.4, y: 2.2, size: 0.312, text: 'US' },
{ x: 88.6, y: 1.3, size: 0.197, text: 'Brazil' },
{ x: 99, y: 0.7, size: 0.0818, text: 'Germany' },
{ x: 72, y: 2.0, size: 0.0826, text: 'Egypt' },
{ x: 99.6, y: 3.4, size: 0.143, text: 'Russia' },
{ x: 99, y: 0.2, size: 0.128, text: 'Japan' },
{ x: 86.1, y: 4.0, size: 0.115, text: 'Mexico' },
{ x: 92.6, y: 6.6, size: 0.096, text: 'Philippines' },
{ x: 61.3, y: 14.5, size: 0.162, text: 'Nigeria' }];

export let splinedata: object[] = [
    { x: 'Jan', high: 14, low: 4, high1: 29, low1: 19 },
    { x: 'Feb', high: 17, low: 7, high1: 32, low1: 22 },
    { x: 'Mar', high: 20, low: 10, high1: 35, low1: 25 },
    { x: 'Apr', high: 22, low: 12, high1: 37, low1: 27 },
    { x: 'May', high: 20, low: 10, high1: 35, low1: 25 },
    { x: 'Jun', high: 17, low: 7, high1: 32, low1: 22 },
    { x: 'Jul', high: 15, low: 5, high1: 30, low1: 20 },
    { x: 'Aug', high: 17, low: 7, high1: 32, low1: 22 },
    { x: 'Sep', high: 20, low: 10, high1: 35, low1: 25 },
    { x: 'Oct', high: 22, low: 12, high1: 37, low1: 27 },
    { x: 'Nov', high: 20, low: 10, high1: 35, low1: 25 },
    { x: 'Dec', high: 17, low: 7, high1: 32, low1: 22 }];