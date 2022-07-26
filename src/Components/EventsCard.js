import React, { useContext } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ug from '../../public/ug-clock.jpg'
import calender from '../../public/calender.png'
import location from '../../public/location.png'
import { AnimationContext } from './Context'

function EventCard() {

    const { textAnimate, transition } = useContext(AnimationContext)

    return (
        <motion.div
            className='w-full h-fit grid  grid-cols-1 gap-1 bg-white rounded shadow-md overflow-hidden'
            transition={transition}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.9, y: "10%" }}
            whileInView={{ opacity: 1, scale: 1, y: "0%" }}>
            <motion.div
                className='w-full h-40 relative'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}>
                <Image src={ug} layout="fill" className='object-cover' alt="Event Image" />
            </motion.div>
            <motion.div
                className="w-full flex flex-col justify-between items-start gap-3 p-5 "
                transition={transition}
            >
                <motion.div
                    className="w-full h-fit md:gap-1 flex flex-col justify-between items-start"
                    transition={transition}>
                    <motion.div
                        className="card__title"
                        transition={transition}>
                        Diaspora Campaign
                    </motion.div>
                    <motion.div
                        className="w-full flex flex-row h-fit items-center" >
                        <motion.div
                            className="relative w-6 h-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}>
                            <Image src={calender} layout="fill" alt="calender" className="object-contain" />
                        </motion.div>
                        <motion.p
                            className='small__text'
                            {...textAnimate} >
                            Thursday 29 June 2021 GMT 07:30 PM
                        </motion.p>
                    </motion.div>
                    <motion.div className="w-full flex flex-row items-center h-fit" >
                        <motion.div
                            className="relative w-6 h-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}>
                            <Image src={location} layout="fill" alt="calender" className="object-contain" />
                        </motion.div>
                        <motion.p
                            className='small__text'
                            {...textAnimate}>
                            Elizabeth Sey - University of Ghana, Legon
                        </motion.p>
                    </motion.div>
                </motion.div>
                <motion.div>
                    <motion.p
                        className="normal__text text-justify"
                        {...textAnimate}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default EventCard