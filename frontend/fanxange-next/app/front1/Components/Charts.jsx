import React, { useState } from 'react'
import Chart from "react-apexcharts";

const Charts = ({ height, width, color }) => {
    const [chart, setchart] = useState({
        options: {
            chart: {
                height: height || '100%', // Use the provided height or default to '100%'
                maxWidth: '100%',
                type: "area",
                fontFamily: "Inter, sans-serif",
                dropShadow: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            tooltip: {
                enabled: true,
                x: {
                    show: false,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.55,
                    opacityTo: 0,
                    shade: color || "#1C64F2",
                    gradientToColors: [color || "#1C64F2"],
                },
            },
            dataLabels: {
                enabled: false,
            },

            stroke: {
                width: 6,
            },

            grid: {
                show: false,
                strokeDashArray: 4,
                padding: {
                    left: 2,
                    right: 2,
                    top: 0
                },
            },

            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                show: false,
            },

        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
                color: color || "#1A56DB",

            },
            /*  {
                 name: "series-2",
                 data: [30, 45, 40, 50, 60, 49, 91, 49, 70,],
                 color:"#fff"
             } */
        ]
    })


    return (
        <div>
            <div className="row ">
                <div className="mixed-chart text-black ">
                    <Chart
                        height={height || '100%'} // Use the provided height or default to '100%'
                        width={width || '100%'}
                        options={chart.options}
                        series={chart.series}
                        type="area" />

                </div>
            </div>
        </div>
    )
}

export default Charts


