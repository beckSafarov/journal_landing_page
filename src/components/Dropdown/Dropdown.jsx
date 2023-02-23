import {useState} from 'react'
import { BsChevronDown } from 'react-icons/bs'
import s from './Dropdown.module.scss'
const Dropdown = ({content, children}) => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className={s.container}>
      <span className={s.label} onClick={() => setIsOpen(!isOpen)}>
        {children} <BsChevronDown />
      </span>
      {isOpen && (
        <div className={s.content}>
          {content.map((sublink, i) => (
            <p key={i}>{sublink.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown