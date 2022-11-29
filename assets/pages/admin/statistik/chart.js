// fetch('./datastat')
//     .then(res => res.json())
//     .then((out) => {
//         console.log('Output: ', out);
//     }).catch(err => console.error(err));
// var urlChart = './datastat';
// var dataUrlChart = fetch('./datastat').then(function (response) {
//     return response.json();
// })
// function setup() {
//     loadJSON('./datastat', gotData, 'jsonp');
// }

// function gotData(data) {
//     console.log(data);
// }
// var dataUrlChart = loadJSON('./datastat');
// console.log(dataUrlChart);
// var dataChart = JSON.parse(dataUrlChart);
// var dataChart = $.get('./datastat').done((data) => {
//     var hasil = JSON.parse(data)
//     return hasil
//     // console.log(data)
// })

var dataChart = $.ajax({
    dataType: "json",
    type: "get",
    url: "./datastat",
    success: function (msg) {
        // var result = JSON.parse(msg);
        // return result.pertahun;
        return msg;
    }
})
alert(dataChart);
Highcharts.chart('container', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    title: {
        text: 'Jumlah Alumni Bekerja dan Tidak Bekerja'
    },
    plotOptions: {
        pie: {
            innerSize: 100,
            depth: 45
        }
    },
    series: [{
        name: 'Delivered amount',
        data: [
            ['Bekerja', 18],
            ['Tidak Bekerja', 4]
        ]
    }]
});

Highcharts.chart('metode-belajar', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },

    title: {
        text: 'Metode Pembelajaran'
    },

    xAxis: {
        categories: ['Perkuliahan', 'Demonstrasi', 'Partisipasi proyek riset', 'Magang', 'Praktikum', 'Kerja lapangan', 'Diskusi'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },

    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Response',
            skew3d: true
        }
    },

    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },

    series: [{
        name: 'Sangat Besar',
        data: [5, 3, 4, 7, 2, 3, 4],
        stack: 'male'
    }, {
        name: 'Besar',
        data: [3, 4, 4, 2, 5, 6, 1],
        stack: 'male'
    }, {
        name: 'Cukup Besar',
        data: [2, 5, 6, 2, 1, 1, 3],
        stack: 'male'
    }, {
        name: 'Kurang',
        data: [3, 0, 4, 4, 3, 4, 5],
        stack: 'male'
    }, {
        name: 'Tidak sama sekali',
        data: [3, 0, 4, 4, 3, 5, 8],
        stack: 'male'
    }]
});


var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'alumni-per-tahun',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: 'Alumni per Tahun'
    },
    // subtitle: {
    //     text: 'Test options by dragging the sliders below'
    // },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    // series: [{
    //     "name": '2017',
    //     "data": [1021]
    // }, {
    //     "name": '2018',
    //     "data": [1078]
    // }, {
    //     "name": '2019',
    //     "data": [756]
    // }, ]
    series: dataChart
});
// data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

function showValues() {
    $('#alpha-value').html(chart.options.chart.options3d.alpha);
    $('#beta-value').html(chart.options.chart.options3d.beta);
    $('#depth-value').html(chart.options.chart.options3d.depth);
}

// Activate the sliders
$('#sliders input').on('input change', function () {
    chart.options.chart.options3d[this.id] = parseFloat(this.value);
    showValues();
    chart.redraw(false);
});