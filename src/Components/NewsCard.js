import React from 'react'
import Image from 'next/image'
import ug from '../../public/ug-clock.jpg'
import Button from './Button'

function NewsCard() {
  return (
    <div className="w-full h-fit rounded shadow-md overflow-hidden" >
      <div>
        <div className='w-full h-40 relative ' >
          <Image src={ug} layout="fill" className="object-cover" alt="News Image" />
        </div>
      </div>
      <div className='w-full h-fit flex flex-col bg-main-blue p-5 gap-3' >
        <div>
          <p className="card__title text-left text-white" >UG Students Need New Buses</p>
          <p className="small__text text-left text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...
          </p>
        </div>
        <div>
          <Button style="primary capitalize text-xs px-6 py-2" >
            Read more
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewsCard