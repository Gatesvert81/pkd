import React from 'react'
import Image from 'next/image'
import ug from '../../public/ug-clock.jpg'
import calender from '../../public/calender.png'
import location from '../../public/location.png'
import Button from './Button'

function EventCard({ small }) {
    return (
        <div className='w-full h-fit grid  grid-cols-1 gap-1 bg-white rounded shadow-md overflow-hidden' >
            <div className='w-full h-40 relative' >
                <Image src={ug} layout="fill" className='object-cover' alt="Event Image" />
            </div>
            <div className="w-full flex flex-col justify-between items-start gap-3 p-5 " >
                <div className="w-full h-fit md:gap-1 flex flex-col justify-between items-start" >
                    <div className="card__title" >Diaspora Campaign</div>
                    <div className="w-full flex flex-row h-fit items-center" >
                        <div className="relative w-6 h-6" >
                            <Image src={calender} layout="fill" alt="calender" className="object-contain" />
                        </div>
                        <p className='small__text' >Thursday 29 June 2021 GMT 07:30 PM</p>
                    </div>
                    <div className="w-full flex flex-row items-center h-fit" >
                        <div className="relative w-6 h-6" >
                            <Image src={location} layout="fill" alt="calender" className="object-contain" />
                        </div>
                        <p className='small__text' >Elizabeth Sey - University of Ghana, Legon</p>
                    </div>
                </div>
                <div>                
                    <p className="normal__text text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EventCard