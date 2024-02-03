import React from 'react'

type Props = {
  src: string
  alt?: string
  size?: 'small' | 'medium' | 'large'
}

const Avatar = ({src,alt='avatar',size='medium'}: Props) => {
  const sizeClass = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  }

  return (
    <div className={`rounded-full border-[1.5px] border-gray-800 overflow-hidden ${sizeClass[size]}`}>
      <img src={src} alt={alt}/>
    </div>
  )
}

export default Avatar