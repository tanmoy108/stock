'use client'
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

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
  const [seriesData, setSeriesData] = useState<SeriesData[]>([]);
  const [chartOptions, setChartOptions] = useState<ChartOptions>({
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: "CandleStick Chart",
      align: "left"
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  });

  useEffect(() => {
    // Fetch data from chartInfo.json and update state
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/qs/665ee3b5e41b4d34e4fe48c6');
        const data = await response.json();
        console.log(data.record);
        setSeriesData(data.record.data);
        setChartOptions(data.record.options);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
      
    };

    fetchData();

    
  }, []);

  return (
    <div id="chart">
      {typeof window !== 'undefined' ? (
      <ReactApexChart
        options={chartOptions}
        series={seriesData}
        type="candlestick"
        height={350}
      />
    ) : (
      <div>Loading Chart...</div>
    )}
    </div>
  );
};

export default Chart;
