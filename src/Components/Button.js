import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AnimationContext } from './Context'

function Button({ children, style, type, click, value }) {

    const { delay, duration } = useContext(AnimationContext)

    return (
        <motion.button
            className={style}
            onClick={click}
            type={type}
            value={value}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                delay,
                default: {
                    duration
                }
            }}>
            {children}
        </motion.button>
    )
}

export default Button