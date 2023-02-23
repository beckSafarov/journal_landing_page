import React from 'react'
import Search from '../Search/Search'
import s from './SearchSection.module.scss'
import { BsChevronDown } from 'react-icons/bs'

const SearchSection = () => {
  return (
    <div className={s.container}>
      <div className={s.searchContainer}>
        <Search isDiff={true}/>
      </div>
      <div className={s.buttonContainer}>
        <button className={s.btn}>Журналы <BsChevronDown/> </button>
      </div>
    </div>
  )
}

export default SearchSection