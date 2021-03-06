import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AnimationContext } from './Context'

function VisionCard() {


    const { textAnimate } = useContext(AnimationContext)

    return (
        < motion.div
            className='grid__items justify-center items-center gap-2 rounded shadow bg-faded-blue p-5'
            initial={{ opacity: 0, scale: 0.9, y: "10%" }}
            whileInView={{ opacity: 1, scale: 1, y: "0%" }}
            transition={{
                delayChildren: 0.2
            }}
            whileHover={{ scale: 1.1 }}
        >
            <motion.div className='w-full text-center' >
                <motion.p {...textAnimate}>
                    
                </motion.p>
                <motion.p {...textAnimate} className='card__title' >
                    Reformers for Change
                </motion.p>
            </motion.div>
            <motion.div className='w-full text-center normal__text'>
                <motion.p {...textAnimate}>
                    Update Coming Soon !!!
                </motion.p>
            </motion.div>
        </motion.div >
    )
}

export default VisionCard