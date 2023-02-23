import React from 'react'
import s from './Stats.module.scss'

const statBoxes = [
  {status: 'passive', title: '5000', subtitle: 'Журналы'},
  {status: 'passive', title: '120', subtitle: 'Авторы'},
  {status: 'active', title: '80', subtitle: 'Организации'},
  {status: 'passive', title: '200', subtitle: 'Семинары'},
]

const Stats = () => {
  const colors = ['red', 'green', 'yellow', '#ccc']
  const colors2 = ['transparent', 'transparent', 'transparent', 'transparent']
  const getClass = (stat, baseClass) => {
    return stat.status === 'active' ? `${s[baseClass]} ${s.active}` : `${s[baseClass]}`
  }
  return (
    <div className={s.container}>
      {statBoxes.map((stat, i) => (
        <div style={{ background: colors2[i] }} key={i} className={s.statBox}>
          <div
            className={getClass(stat, 'circle')}
          />
          <span className={getClass(stat, 'title')}>{stat.title}+</span>
          <span className={getClass(stat, 'subtitle')}>{stat.subtitle}</span>
        </div>
      ))}
    </div>
  )
}

export default Stats