import React from 'react'
import StatCircle from '../StatCircle/StatCircle'
import s from './Stats.module.scss'

const statBoxes = [
  {status: 'passive', title: '5000', subtitle: 'Журналы'},
  {status: 'passive', title: '120', subtitle: 'Авторы'},
  {status: 'active', title: '80', subtitle: 'Организации'},
  {status: 'passive', title: '200', subtitle: 'Семинары'},
]

const Stats = () => {
  return (
    <div className={s.container}>
      {statBoxes.map((stat, i) => (
        <StatCircle title={stat.title} subtitle={stat.subtitle} isActive={i===2}/>
      ))}
    </div>
  )
}

export default Stats