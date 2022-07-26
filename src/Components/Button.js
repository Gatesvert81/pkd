import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AnimationContext } from './Context'

function Button({ children, style, type, click }) {

    const { delay, duration } = useContext(AnimationContext)

    return (
        <motion.button
            className={style}
            onClick={click}
            type={type}
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