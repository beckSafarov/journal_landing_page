import React from 'react'
import s from './Navbar.module.scss'
import { IoEnterOutline } from 'react-icons/io5'
import Dropdown from '../Dropdown/Dropdown'
import Search from '../Search/Search'
import Journal from '../Journal/Journal'
import useResponsiveDesign from '../../hooks/useResponsiveDesign'
import Sidebar from './Sidebar/Sidebar'
const menuLinks = [
  { name: 'Журналы', type: 'simple' },
  { name: 'Статья', type: 'simple' },
  { name: 'Авторы', type: 'simple' },
  { name: 'Организации', type: 'simple' },
  {
    name: 'Пресс-служба',
    type: 'dropdown',
    content: [
      { name: 'Sublink 1' },
      { name: 'Sublink 2' },
      { name: 'Sublink 3' },
    ],
  },
  { name: 'Контакт', type: 'simple' },
]
const languages = [{ name: 'English' }, { name: 'Русский' }, { name: "O'zbek" }]

const Navbar = () => {
  const { isBigScreen, isDesktop } = useResponsiveDesign()
  return (
    <div className={s.container}>
      <div className={s.row}>
        <Journal />
        {isDesktop ? (
          <>
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
            <div className={s.rightBlock}>
              <Search width={isBigScreen ? 346 : '100%'} />
              <div className={s.langContainer}>
                <Dropdown content={languages}>Русский</Dropdown>
              </div>
              <div className={s.btnContainer}>
                <button type='button' className={s.signupBtn}>
                  Войти <IoEnterOutline />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <Sidebar menuLinks={menuLinks} languages={languages}/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
