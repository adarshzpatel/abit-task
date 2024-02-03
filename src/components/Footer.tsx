import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='p-16 flex flex-wrap gap-8 border-t-[1.5px] justify-between'>
        <div>
          <h1 className='text-4xl mb-2 font-bold'>aBit</h1>
          <p className='font-serif text-gray-500'>Changing The Way In Which <br />  Creators And Fans Interact.</p>
        </div>
          <div className='border-l-2 border-gray-300 grid pl-4 gap-4'>
          <a href="#">Home</a>
          <a href="#">Are you a creator?</a>
          <a href="#">Support</a>

          </div>
    </div>
  )
}

export default Footer