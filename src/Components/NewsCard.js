import React, { useContext } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ug from '../../public/ug-clock.jpg'
import Button from './Button'
import { AnimationContext } from './Context'

function NewsCard() {
  const { textAnimate, transition } = useContext(AnimationContext)

  return (
    <motion.div
      className="w-full h-fit rounded shadow-md overflow-hidden"
      transition={transition}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, scale: 0.9, y: "10%" }}
      whileInView={{ opacity: 1, scale: 1, y: "0%" }}
    >
      <motion.div>
        <motion.div
          className='w-full h-40 relative '
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }} >
          <Image src={ug} layout="fill" className="object-cover" alt="News Image" />
        </motion.div>
      </motion.div>
      <motion.div
        className='w-full h-fit flex flex-col bg-main-blue p-5 gap-3'
      >
        <motion.div transition={transition}>
          <motion.p
            className="card__title text-left text-white"
            {...textAnimate}>
            UG Students Need New Buses
          </motion.p>
          <motion.p
            className="small__text text-left text-white"
            {...textAnimate}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...
          </motion.p>
        </motion.div>
        <motion.div>
          <Button style="primary capitalize text-xs px-6 py-2" >
            Read more
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default NewsCard