import React from 'react'
import { useGlobalContext } from '../helper/context'
import Chart from './chart/Pie3d'

const Repos = () => {
  const { repos } = useGlobalContext()

  let languages = repos.reduce((total, item) => {
    const { language } = item
    if (!language) return total
    if (!total[language]) total[language] = { label: language, value: 1 }
    else {
      total[language] = { ...total[language], value: total[language].value + 1 }
    }
    return total
  }, {})
  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)

  return (
    <div>
      <Chart chartData={languages} />
    </div>
  )
}

export default Repos
