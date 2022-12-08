import React from 'react'
import { useGlobalContext } from '../helper/context'
import Chart from './chart/Pie3d'
import Doughnut from './chart/Doughnut'

const Repos = () => {
  const { repos } = useGlobalContext()

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item
    if (!language) return total
    if (!total[language])
      total[language] = { label: language, value: 1, stars: stargazers_count }
    else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }
    }
    return total
  }, {})

  console.log(languages)

  const mostLanguages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)

  const mostStars = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { ...item, value: item.stars }
    })
    .slice(0, 5)
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col lg:flex-row justify-center gap-10 w-full responsive-chart'>
        <Chart chartData={mostLanguages} />
        <Doughnut chartData={mostStars} />
      </div>
    </div>
  )
}

export default Repos
