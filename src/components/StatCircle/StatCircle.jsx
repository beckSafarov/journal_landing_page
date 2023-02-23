import React from 'react'
import s from './StatCircle.module.scss'

const StatCircle = ({title, subtitle, isActive}) => {
  const getClass = (baseClass) => {
    return isActive
      ? `${s[baseClass]} ${s.active}`
      : `${s[baseClass]}`
  }
  return (
    <div className={getClass('circle')}>
      <div className={s.content}>
        <span className={getClass('title')}>{title}+</span>
        <div className={s.subtitle}>{subtitle}</div>
      </div>
    </div>
  )
}

export default StatCircle