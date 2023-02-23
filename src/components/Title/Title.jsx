import React from 'react'
import s from './Title.module.scss'

const Title = ({children}) => {
  return (
    <span className={s.title}>{children}</span>
  )
}

export default Title