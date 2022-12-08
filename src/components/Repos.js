import React from 'react'
import { useGlobalContext } from '../helper/context'
import Chart from './chart/Pie3d'

const Repos = () => {
  const { repos } = useGlobalContext()

  const chartData = [
    {
      label: 'HTML',
      value: '290',
    },
    {
      label: 'CSS',
      value: '260',
    },
    {
      label: 'JS',
      value: '180',
    },
    {
      label: 'TS',
      value: '140',
    },
  ]
  console.log(repos)
  return (
    <div>
      <Chart chartData={chartData} />
    </div>
  )
}

export default Repos
