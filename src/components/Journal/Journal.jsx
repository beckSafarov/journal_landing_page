import React from 'react'
import s from './Journal.module.scss'

const Journal = () => {
  return (
    <div className={s.journalContainer}>
      <div className={s.circle} />
      <span className={s.title}>Journal</span>
    </div>
  )
}

export default Journal