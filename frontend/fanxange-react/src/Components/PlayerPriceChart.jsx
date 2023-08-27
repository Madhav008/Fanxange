import React, { useState } from 'react'
import Chart from "react-apexcharts";

const PlayerPriceChart = () => {
    const [chart, setchart] = useState({
        options: {
            // enable and customize data labels using the following example, learn more from here: https://apexcharts.com/docs/datalabels/
            dataLabels: {
                enabled: true,
                // offsetX: 10,
                style: {
                    cssClass: 'text-xs text-white font-medium'
                },
            },
            grid: {
                show: false,
                strokeDashArray: 4,
                padding: {
                    left: 16,
                    right: 16,
                    top: -26
                },
            },
            chart: {
                maxWidth: "100%",
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
            legend: {
                show: true
            },
            fill: {
                type: "gradient",
                gradient: {
                    opacityFrom: 0.55,
                    opacityTo: 0,
                    shade: "#1C64F2",
                    gradientToColors: ["#1C64F2"],
                },
            },
            stroke: {
                width: 6,
            },
            xaxis: {
                categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
                labels: {
                    show: false,
                    style:{
                        colors:"#fff"
                    }
                },
                axisBorder: {
                    show: true,
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
            /* {
                name: "Price",
                data: [30, 40, 45, 50, 49, 60, 70, 91],
                color: "#7E3BF2",

            }, */
            {
                name: "Points",
                data: [30, 45, 40, 50, 60, 49, 91, 49, 70,],
                color: "#3E3B99"
            }
        ]
    })

    return (
            <div class=" bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 w-full">
                <div class="flex justify-between mb-5">
                    <div>
                        <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">$12,423</h5>
                        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Sales this week</p>
                    </div>
                    <div
                        class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                        23%
                        <svg class="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
                        </svg>
                    </div>
                </div>
                <div id="data-labels-chart">
                    <Chart
                    height="250px"
                        options={chart.options}
                        series={chart.series}
                        type="area" />
                </div>
                
            </div>

    )
}

export default PlayerPriceChart



