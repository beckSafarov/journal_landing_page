import React from 'react'
import Title from '../Title/Title'
import s from './OurAddressSection.module.scss'
const contactData = [
  { label: 'Телефон', text: '(+99871) 203-01-01, 242-48-93' },
  { label: 'E-mail:', text: 'farmkomitet@ssv.uz' },
  {
    label: 'Адресс:',
    text: 'Republic of Uzbekistan, Tashkent, Mirabad district, Kizil arvat str. 2-passage, house 37',
  },
]

const OurAddressSection = () => {
  return (
    <div className={s.container}>
      <div className={s.ourOfficeCard}>
        <Title>Мы находимся в офисе Ташкент</Title>
        <div className={s.contactInfo}>
          {contactData.map((data, i) => (
            <div key={i} className={s.infoBox}>
              <span className={s.title}>{data.label}</span>
              <div className={s.content}>{data.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={s.map}></div>
    </div>
  )
}

export default OurAddressSection