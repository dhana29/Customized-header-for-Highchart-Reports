$(function () {
    $('#container').highcharts({

 title: {
                useHTML: true,
                text: '<span style="font-size: 16px;font-weight:bold;font-family: Arial"> Line1 Title Text </span><br/> <span style="font-size: 14px;font-weight:bold;font-family: Arial">Line2 Title Text</span>',
                style: {
                    "text-align": "center",
                    "background-color":"red"
                }
       },
 subtitle: {
                useHTML: true,
                text: '<span> Line1 sub Title Text </span><br/> <span>Line2 sub Title Text</span>',
                align: 'left',
                x: 100,
                style: {
                    "font-size": "12px",
                }
            },
        credits: {
            text: 'Logo Text',
            href: 'https://i.imgur.com/QiAMG0gg.png',
            position: {
                align: 'right',
                x: -75,
                verticalAlign: 'top',
                y: 25
            },
            style: {
                color: 'red'
            }
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    }, function (chart) { // on complete

        chart.renderer.image(
            'https://i.imgur.com/QiAMG0gg.png', 20, 10, 30, 30)
            .add();

    });
});