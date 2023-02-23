import React from 'react'
import s from './PlannedConferenceCard.module.scss'
import { BsCalendarWeek } from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import {FiMail} from 'react-icons/fi'
import {GiEarthAfricaEurope} from 'react-icons/gi'



const PlannedConferenceCard = ({data, isActive}) => {
   const getClass = (baseClass) => {
     return isActive ? `${s[baseClass]} ${s.active}` : `${s[baseClass]}`
   }
  const contactsData = [
    {
      Icon: CiLocationOn,
      label: data.adress_ru,
    },
    { Icon: FiMail, label: data.email },
    { Icon: GiEarthAfricaEurope, label: 'http://www.frccsc.ru' },
  ]
  return (
    <div className={s.card}>
      <div className={s.dateContainer}>
        <BsCalendarWeek />
        <span>{data.date}</span>
      </div>
      <div className={s.title}>
        {data.name_ru}
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