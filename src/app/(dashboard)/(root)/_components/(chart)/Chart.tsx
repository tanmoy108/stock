'use client'
import chartInfo from "@/lib/chart.json";
import { useState } from "react";
import ReactApexChart from 'react-apexcharts';

interface ChartOptions {
    chart: {
      type: 'candlestick';
      height: number;
    };
    title: {
      text: string;
      align: 'left';
    };
    xaxis: {
      type: 'datetime';
    };
    yaxis: {
      tooltip: {
        enabled: boolean;
      };
    };
}
  
interface SeriesData {
    data: { x: string; y: number[] }[];
}

const Chart = () => {
    const [seriesData , setSeriesData] = useState<SeriesData[]>(chartInfo.data || []);
    const [chartOptions , setChartOptions] = useState<ChartOptions>(chartInfo.options as ChartOptions);

        if (!chartInfo || !chartInfo.options || !chartInfo.data) {
            return <div>Error: Unable to load chart data.</div>;
        }

    return (
        <div id="chart">
            <ReactApexChart 
                options={chartOptions} 
                series={seriesData} 
                type="candlestick" 
                height={350} 
            />
        </div>
    );
}

export default Chart;
