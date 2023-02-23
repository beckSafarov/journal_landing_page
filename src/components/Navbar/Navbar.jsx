import React from 'react'
import s from './Navbar.module.scss'
import {BsChevronDown} from 'react-icons/bs'
import {IoEnterOutline} from 'react-icons/io5'
import {FiSearch} from 'react-icons/fi'
import Dropdown from '../Dropdown/Dropdown'
import Search from '../Search/Search'
import Journal from '../Journal/Journal'
const menuLinks=[
  {name: "Link 1", type: "simple"},
  {name: "Link 2", type: "simple"},
  {name: "Link 3", type: "simple"},
  {name: "Link 4", type: "simple"},
  {name: "Link 5", type: "dropdown", content: [
    {name: "Sublink 1"},
    {name: "Sublink 2"},
    {name: "Sublink 3"},
  ]},
  {name: "Link 6", type: "simple"},
]
const languages = [
  {name: "En"},
  {name: "Ру"},
  {name: "O'z"},
]

const Navbar = () => {
  return (
    <div className={s.container}>
      <div className={s.row}>
        <Journal/>
        <div className={s.menuLinks}>
          {menuLinks.map((link, i) => (
            <React.Fragment key={i}>
              {link.type === 'simple' ? (
                <span className={s.simpleLink}>{link.name}</span>
              ) : (
                <Dropdown content={link.content}>{link.name}</Dropdown>
              )}
            </React.Fragment>
          ))}
        </div>
        <Search width={346}/>
        <div className={s.langContainer}>
          <Dropdown content={languages}>Ру</Dropdown>
        </div>
        <div className={s.btnContainer}>
          <button type='button' className={s.signupBtn}>
            Войти <IoEnterOutline />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar