import React from 'react'
import Journal from '../Journal/Journal'
import s from './Footer.module.scss'
import { BsFacebook, BsTelegram, BsYoutube } from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {RiErrorWarningLine} from 'react-icons/ri'

const footerLinks = {
  Меню: ['Journals', 'Articles', 'Authors', 'Organizations', 'Contact'],
  'Пресс-служба': ['Conferences', 'Seminar', 'Videos', 'News'],
}

const contacts = [
  { title: 'Telephone', text: '(+99871) 203-01-01, 242-48-93' },
  { title: 'Address', text: 'г.Ташкент, Узбекситан' },
  { title: 'E-mail', text: 'farmkomitet@ssv.uz' },
]

const socials = [BsFacebook, BsTelegram, AiFillInstagram, BsYoutube]

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.columnsContainer}>
        <div className={s.col}>
          <Journal />
          <p>
            При цитировании материалов Сайта, включая охраняемые авторские
            произведения, ссылка на Сайт обязательна.
          </p>
          <div className={s.faq}>
            <RiErrorWarningLine />
            <span>FAQ</span>
          </div>
        </div>
        {Object.keys(footerLinks).map((prop, i) => (
          <div key={i} className={s.col}>
            <span className={s.title}>{prop}</span>
            <div className={s.links}>
              {footerLinks[prop].map((link, i) => (
                <span key={i} className={s.link}>
                  {link}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className={s.col}>
          <span className={s.title}>Контакты</span>
          {contacts.map((contact, i) => (
            <div key={i} className={s.contactBox}>
              <span className={s.contactTitle}>{contact.title}:</span>
              <span className={s.text}>{contact.text}</span>
            </div>
          ))}
        </div>
        <div className={s.col}>
          <span className={s.title}>Социальные сети</span>
          <div className={s.socialsRow}>
            {socials.map((Icon, i) => (
              <Icon style={{ color: i === 1 ? '#3C4BDC' : 'auto' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer