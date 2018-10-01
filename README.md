# Customized-header-for-Highchart-and-HighMaps-Reports
Create customized Headers (with Logo image, logo Text, Title, Subtitle) in **Highcharts and Highmaps

In this repository I discussed about to create customized Header - 
<ul>
<li> Logo Image
<li> Logo Text
<li> Customized Header Title and SubTitle
</ul>

**Logo image -** 
<pre> 
  function (chart) { 
        chart.renderer.image(
             //image url, x-axis, y-axis, height, width
            'https://i.imgur.com/QiAMG0gg.png', 20, 10, 30, 30)
            .add();
    });
 </pre>
 
 
**Logo Text and Hyperlink text -** 
 <pre>
 credits: {
            text: 'Logo Text',
            href: 'https://i.imgur.com/QiAMG0gg.png',
            position: {
                align: 'right',
                x: -70,
                verticalAlign: 'top',
                y: 25
            },
            style: {
                color: 'red'
            }
        }
 </pre>
 
 **Header Title Text -** 
 <pre>
 title: {
                useHTML: true,
                <code>text: '<span style="font-size: 16px;font-weight:bold;font-family: Arial"> Line1 Title Text </span><br/> <span style="font-size: 14px;font-weight:bold;font-family: Arial">Line2 Title Text</span>',</code>
                style: {
                    "text-align": "center",
                    "background-color":"red"
                }
       },
 </pre>
 
 **Header Sub Title Text -** 
 <pre>
 subtitle: {
                useHTML: true,
                text: <code>'<span> Line1 sub Title Text </span><br/> <span>Line2 sub Title Text</span>',</code>
                align: 'left',
                x: 100,
                style: {
                    "font-size": "12px",
                }
            }
 </pre>
 
 Happy Coding!!!
