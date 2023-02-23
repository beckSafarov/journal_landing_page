import { useEffect, useState } from 'react'
import s from './PlannedConferencesSection.module.scss'
import axios from 'axios'
import PlannedConferenceCard from './PlannedConferenceCard'
import { HiArrowRight } from 'react-icons/hi2'
import Title from '../Title/Title'

const PlannedConferencesSection = () => {
  const [data, setData] = useState([])  

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'https://dilmurod7007.pythonanywhere.com/api/conferences'
      )
      setData(data)
    })()
  }, [])
  
  return (
    <div className={s.container}>
      <Title>Планируемые конференции</Title>
      <div className={s.cardsContainer}>
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <PlannedConferenceCard key={i} />
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

export default PlannedConferencesSection
