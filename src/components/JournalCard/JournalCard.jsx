import React from 'react'
import s from './JournalCard.module.scss'
import { BsCalendarWeek, BsArrowRight } from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'

const JournalCard = ({data}) => {
  const sample = 'https://i.pinimg.com/originals/a1/f8/87/a1f88733921c820db477d054fe96afbb.jpg'
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <img src={sample} className={s.img} alt={'Image here'} />
      </div>
      <div className={s.textContent}>
        <div className={s.nameRow}>
          <span className={s.name}>{data.name_ru}</span>
          <span className={s.views}> <AiOutlineEye/> 320</span>
        </div>
        <p className={s.description}>
          {/* {data.description_ru} */}
          Журнал иновационных иследований в текстильной и легкой
          промышленности...
        </p>
      </div>
      <div className={s.footer}>
        <span className={s.date}>
          <BsCalendarWeek /> 12.12.2022
        </span>
        <div className={s.circle}>
          <BsArrowRight />
        </div>
      </div>
    </div>
  )
}

export default JournalCard