import React from 'react'
import Title from '../Title/Title'
import s from './OrganizationsSection.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import OrganizationCard from './Organization'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const OrganizationsSection = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        'https://dilmurod7007.pythonanywhere.com/api/organizations'
      )
      setData(data.results)
    })()
  }, [])
  console.log(data)
  return (
    <div className={s.container}>
      <Title>Организации</Title>
      <div className={s.cardsContainer}>
        {data.map((cardData, i) => (
          <OrganizationCard data={cardData} key={i} isActive={i===1}/>
        ))}
        <div className={s.controls}>
          <div><BsArrowLeft/></div>
          <div><BsArrowRight/></div>
        </div>
      </div>
    </div>
  )
}

export default OrganizationsSection
