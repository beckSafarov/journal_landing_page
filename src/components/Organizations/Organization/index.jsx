import s from './OrganizationCard.module.scss'
import {HiOutlinePhone} from 'react-icons/hi'
import {TfiLocationPin} from 'react-icons/tfi'
import { IoMail, IoEarthOutline } from 'react-icons/io5'

const FAX = () => {
  return <div className={s.fax}><HiOutlinePhone/> <sub>Fax</sub></div>
}
const ISSN = () => <div style={{fontSize: '14px'}}>ISSN</div>

const OrganizationCard = ({data, isActive}) => {

  const contacts = [
    { icon: TfiLocationPin, label: data.adress_ru },
    { icon: HiOutlinePhone, label: data.phon_number },
    { icon: FAX, label: data.facs_number },
    { icon: IoMail, label: data.email },
    { icon: IoEarthOutline, label: data.website },
    { icon: ISSN, label: data.issn },
  ]

  return (
    <div className={s.card}>
      <div className={s.logo}>
        <img src={'/cardLogo.png'} alt='logo' width={64} height={64} />
      </div>
      <div className={s.textContent}>
        <div className={isActive ? `${s.title} ${s.active}` : `${s.title}`}>
          {data.name_ru}
        </div>
        <div className={s.contacts}>
          {contacts.map((Contact, i) => (
            <div key={i} className={s.row}>
              <span className={s.icon}>
                <Contact.icon />
              </span>
              <span className={s.label}>{Contact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrganizationCard
