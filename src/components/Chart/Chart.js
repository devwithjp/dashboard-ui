import './Chart.scss';
import ApexCharts from 'react-apexcharts'



export default function Chart(props){
    
    const optionsPie = {
          
        series: [ 55, 31, 14],
        labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
        options: {
            chart: {
                type: 'pie',
                height: 150,
                
                
            }
        },
        plotOptions: {
            pie: {
                customScale: 0.9,
                offsetX:-24,
                offsetY: 12,
                height: 150,

            },
        },
        colors: ['#98D89E','#F6DC7D', '#EE8484'],
        title:{
            text: 'Top products',
            align: 'left',
            style: {
                fontSize:  '18px',
                fontWeight:  700,
                fontFamily:  'Montserrat',
                color:  '#000000'
            },
        },
        legend:{
            fontSize: '14px',
            fontFamily: 'Montserrat',
            fontWeight: 700,
            itemMargin: {
                vertical: 9
            },
            cssClass: 'apexcharts-legend',
            offsetX: 0,
            offsetY: 14,
            formatter: function(seriesName, opts) {
                return [seriesName, '<p class="seriesPercentage">', opts.w.globals.series[opts.seriesIndex]+"%",'</p>']
            }
            // customLegendItems: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies']
        },
        dataLabels: {
            enabled:false,
        }

      
      
      };


    const optionsGraph = {
        series: [
            {
                name: 'User',
                data: [100, 410, 150, 450, 180, 250]
            },
            {
                name: 'Guest',
                data: [200, 380, 200, 300, 250, 400]
            }
        ],
        chart: {
            height: 350,
            type: 'line',
            zoom:{
                enabled:false
            },
            toolbar: {
            show: false
            }
        },
        colors: ['#9BDD7C','#E9A0A0'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth'
        },
        title:{
            text: 'Activities',
            align: 'left',
            style: {
                fontSize:  '18px',
                fontWeight:  700,
                fontFamily:  'Montserrat',
                color:  '#000000'
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: ['', 'Week 1', 'Week 2', 'Week 3', 'Week 4', '']
            ,
            labels: {
                show:true,
                style: {
                    colors: ['#858585'],
                    fontSize: '14px',
                    fontFamily: 'Lato',
                    fontWeight: 400,
                    cssClass: 'apexcharts-label',
                },
            }
        },
        yaxis: {
            labels: {
                show:true,
                style: {
                    colors: ['#858585'],
                    fontSize: '14px',
                    fontFamily: 'Lato',
                    fontWeight: 400,
                    cssClass: 'apexcharts-label',
                },
            }
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        grid: {
            show: true,
            borderColor: '#EAEAEA',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },
            column: {
                opacity: 0.4
            },  
            padding: {
                top: 30,
                right: 0,
                bottom: 0,
                left: 15
            },  
        }
    };  
      
    return(
        <div id="chart">
            <ApexCharts options={props.type === 'line'? optionsGraph : optionsPie} series={props.type === 'line' ? optionsGraph.series : optionsPie.series} type={props.type} height={props.type === 'line' ?300: 200} />
        </div>
    );
}

