import React from 'react'

type Props = {
  title:string
  shares:string
  offered:string
  raised:string
  thumbnailSrc:string
}

const VideoCard = ({title,shares,offered,raised,thumbnailSrc}: Props) => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard