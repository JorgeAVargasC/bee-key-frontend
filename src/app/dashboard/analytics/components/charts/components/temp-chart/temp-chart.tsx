import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import ReactApexChart from 'react-apexcharts'
import {
  StationData,
  StationName
} from '../../interfaces/firebase-data.interface'
import { ApexOptions } from 'apexcharts'

interface Props {
  stationName: StationName
  stationData: StationData[]
}

export const TempChart: React.FC<Props> = ({ stationName, stationData }) => {
  // Configuración del gráfico
  const chartData = [
    {
      name: 'Temperatura',
      data: stationData.map((data) => ({
        x: new Date(data.createdAt).getTime(),
        y: data.temperature.value
      }))
    }
  ]

  const options: ApexOptions = {
    chart: {
      type: 'line',
      height: 300,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    stroke: {
      curve: 'smooth',
      colors: ['#f3a60d'],
      width: 2
    },
    grid: {
      borderColor: '#ddd',
      strokeDashArray: 3
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#aaa',
          fontSize: '12px'
        }
      },
      axisBorder: {
        color: '#aaa'
      },
      axisTicks: {
        color: '#aaa'
      }
    },
    yaxis: {
      title: {
        text: `Temperatura (${stationData[0]?.temperature.unit})`,
        style: {
          color: '#aaa',
          fontWeight: 600,
          fontSize: '12px'
        }
      },
      labels: {
        style: {
          colors: '#aaa',
          fontSize: '12px'
        }
      },
      axisBorder: {
        color: '#aaa'
      },
      axisTicks: {
        color: '#aaa'
      }
    },
    tooltip: {
      theme: 'light',
      x: {
        format: 'MMM dd, yyyy HH:mm'
      }
    },
    markers: {
      size: 5,
      colors: ['#f3a60d'],
      strokeColors: '#fff',
      strokeWidth: 2
    }
  }

  return (
    <Card className='h-[300px] overflow-hidden'>
      <CardHeader>
        <h5 className='capitalize'>
          {stationName.split('_').join(' ').replace('station', 'Colmena')}
        </h5>
      </CardHeader>
      <CardBody className='overflow-hidden'>
        <ReactApexChart
          options={options}
          series={chartData}
          type='line'
          height={200}
        />
      </CardBody>
    </Card>
  )
}
