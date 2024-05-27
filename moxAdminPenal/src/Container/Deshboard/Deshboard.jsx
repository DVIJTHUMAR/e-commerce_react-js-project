import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Header from '../../Component/Header/Header';
import { Card, Row } from 'react-bootstrap';

const Deshboard = () => {
  const chartOptions = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  };

  const chartOptions1 = {
    chart: {
      id: 'spline-area-chart',
      type: 'area',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  };

  const chartSeries = [
    {
      name: 'Series 1',
      data: [30, 40, 25, 50, 49, 60, 70, 91, 125, 100, 80, 60],
    },
  ];

  const chartOptions2 = {
    chart: {
      id: 'basic-chart',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  };

  const chartSeries2 = [
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 80, 60],
    },
  ];


  const chartOptions3 = {
    chart: {
      id: 'grouped-stacked-columns-chart',
      type: 'bar',
      stacked: true,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };

  const chartSeries3 = [
    {
      name: 'Series A',
      data: [30, 40, 45, 50, 49],
    },
    {
      name: 'Series B',
      data: [20, 30, 35, 40, 39],
    },
    {
      name: 'Series C',
      data: [10, 20, 25, 30, 29],
    },
  ];


  const chartOptions4 = {
    chart: {
      id: 'dumbbell-chart',
      type: 'line',
    },
    xaxis: {
      categories: ['Category A', 'Category B','Category C','Category D','Category E'],
    },
    colors: ['#008FFB', '#00E396'], // Specify colors for each series
  };

  const chartSeries4 = [
    {
      name: 'Start Value',
      type: 'bar',
      data: [20, 40,30,10,50], // Start values
    },
    {
      name: 'End Value',
      type: 'bar',
      data: [50, 80,20,70,60], // End values
    },
    
  ];

  return (
    <>
      <Header />
      <section>
        <Row className='gap-3'>
          <Card className='col-3 m-5 '>
            <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
          </Card>

          <Card className='col-7 m-5'>
            <ReactApexChart options={chartOptions1} series={chartSeries} type="area" height={350} />
          </Card>
        </Row>

        <Row>
          <Card className='w-25 m-5'>
            <ReactApexChart options={chartOptions2} series={chartSeries2} type="line" height={350} />
          </Card>
          <Card className='w-25 m-5'>
            <ReactApexChart options={chartOptions3} series={chartSeries3} type="bar" height={350} />
          </Card>
          <Card className='w-25 m-5'>
          <ReactApexChart options={chartOptions4} series={chartSeries4} type="line" height={350} />
          </Card>
        </Row>
      </section>
    </>

  );
};
export default Deshboard;