import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoEnterOutline } from 'react-icons/io5'
import Dropdown from '../../Dropdown/Dropdown'
import Search from '../../Search/Search'
import s from './Sidebar.module.scss'
import {GrClose} from 'react-icons/gr'

const Sidebar = ({ menuLinks, languages }) => {
  const [sbarClass, setSBarClass] = useState(s.sidebar)

  const handleToggle = () => {
    if (sbarClass === s.sidebar) {
      return setSBarClass(`${s.sidebar} ${s.active}`)
    }
    setSBarClass(s.sidebar)
  }

  return (
    <div>
      <div className={s.toggle} onClick={handleToggle}>
        <FaBars />
      </div>
      <div className={sbarClass}>
        <div className={s.content}>
          <button onClick={handleToggle} className={s.closeButton}>
            <GrClose />
          </button>
          <div className={s.others}>
            <Search />
            <div className={s.langContainer}>
              <Dropdown content={languages}>Русский</Dropdown>
            </div>
          </div>
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
          <div className={s.btnContainer}>
            <button type='button' className={s.signupBtn}>
              Войти <IoEnterOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
