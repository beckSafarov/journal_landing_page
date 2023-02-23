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
      <div className={s.map}>
        <img style={{width: '100%', height: '100%'}} src={'/map.png'} alt='image'/>
        {/* <iframe
          // width='600'
          // height='450'
          style={{border: 'none', width: '90%', height: '90%'}}
          loading='lazy'
          allowfullscreen
          referrerpolicy='no-referrer-when-downgrade'
          src='https://www.google.com/maps/embed/v1/place?key=AIzaSyAjcD2jgxEexg6NFahXy40SLmyy6LK3Aj0
    &q=Space+Needle,Seattle+WA'
        /> */}
      </div>
    </div>
  )
}

export default OurAddressSection