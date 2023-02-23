import React from 'react'
import Search from '../Search/Search'
import s from './SearchSection.module.scss'

const SearchSection = () => {
  return (
    <div className={s.container}>
      <div style={{ flex: 4 }}>
        <Search />
      </div>
      <div style={{flex: 1}}>
        <div className={s.buttonContainer}>
          <button className={s.btn}>Журналы</button>
        </div>
      </div>
    </div>
  )
}

export default SearchSection