import React from 'react'
import s from './Hero.module.scss'
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.leftContent}>
        <span className={s.title}>
          11 ПРИЗНАКОВ ТОГО, ЧТО ПЕРЕД ВАМИ КАРТИНА СЮРРЕАЛИСТОВ
        </span>
        <p className={s.subtitle}>
          Полулюди-полурыбы, бесконечные побережья, отвратительные насекомые и
          человек, разорванный на части
        </p>
        <button className={s.btn}>
          Читать журнал <BsArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Hero