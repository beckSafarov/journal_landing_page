import React from 'react'
import s from './Search.module.scss'
import { FiSearch } from 'react-icons/fi'

const Search = ({width, height, isDiff}) => {
  const getClass = (baseClass) => {
    return isDiff ? `${s[baseClass]} ${s.diff}` : `${s[baseClass]}`
  }
  
  return (
    <div style={{ width }} className={getClass('searchBoxContainer')}>
      <div className={s.searchBox}>
        <div className={s.icon}>
          <FiSearch />
        </div>
        <input
          style={{ height }}
          className={s.searchBox}
          placeholder='Поиск'
        />
      </div>
    </div>
  )
}

export default Search