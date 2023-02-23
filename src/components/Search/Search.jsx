import React from 'react'
import s from './Search.module.scss'
import { FiSearch } from 'react-icons/fi'

const Search = ({width, height}) => {
  return (
    <div style={{ width }} className={s.searchBoxContainer}>
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