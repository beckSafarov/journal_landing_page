import {useEffect, useState} from 'react'
import axios from 'axios'
import s from './Journals.module.scss'
import JournalCard from '../JournalCard/JournalCard'
import { BsArrowRight } from 'react-icons/bs'
import {HiArrowRight} from 'react-icons/hi'
import Title from '../Title/Title'

const Journals = () => {
  const [data, setData] = useState([])  
  useEffect(()=>{
    (async()=>{
      const { data } = await axios.get(
        'https://dilmurod7007.pythonanywhere.com/api/journals'
      )
      setData(data.results)
    })()
  }, [])

  return (
    <div className={s.container}>
      <Title>Journals</Title>
      <div className={s.journals}>
        {data.map((journal, i) => (
          <JournalCard data={journal} key={i} />
        ))}
      </div>
      <div className={s.more}>
        <button className={s.moreBtn}>
          Подробнее <HiArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Journals