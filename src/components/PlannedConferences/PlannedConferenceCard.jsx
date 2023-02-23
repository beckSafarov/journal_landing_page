import React from 'react'
import s from './PlannedConferenceCard.module.scss'
import { BsCalendarWeek } from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import {FiMail} from 'react-icons/fi'
import {GiEarthAfricaEurope} from 'react-icons/gi'

const contactsData = [
  {
    Icon: CiLocationOn,
    label: 'Россия, 119333, г. Москва, ул. Вавилова, 44/2',
  },
  { Icon: FiMail, label: 'frccsc@frccsc.ru' },
  { Icon: GiEarthAfricaEurope, label: 'http://www.frccsc.ru' },
]

const PlannedConferenceCard = ({isActive}) => {
   const getClass = (baseClass) => {
     return isActive ? `${s[baseClass]} ${s.active}` : `${s[baseClass]}`
   }
  return (
    <div className={s.card}>
      <div className={s.dateContainer}>
        <BsCalendarWeek />
        <span>6-8 октября 2022г.</span>
      </div>
      <div className={s.title}>
        Тасвирий ва амалий санъат ҳамда дизайн йўналишидаги республика...
      </div>
      <div className={s.contacts}>
        {contactsData.map((Data, i)=>(
          <div key={i} className={s.row}>
            <span className={s.icon}>{<Data.Icon/>}</span>
            <span className={s.text}>{Data.label}</span>
          </div>
        ))}
      </div>
      <div className={getClass('footer')}/>
    </div>
  )
}

export default PlannedConferenceCard