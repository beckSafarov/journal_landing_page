import React from 'react'

const Avatar = ({ src, size }) => {
  return (
    <div
      className='avatar'
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '100px',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
      }}
    ></div>
  )
}

Avatar.defaultProps = {
  size: 40,
}

export default Avatar
