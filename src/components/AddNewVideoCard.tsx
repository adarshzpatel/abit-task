import React from 'react'

type Props = {
  onClick: () => void
}

const AddNewVideoCard = ({onClick}: Props) => {
  return (
    <div className='h-80 w-64'>
        Add new Video
    </div>
  )
}

export default AddNewVideoCard