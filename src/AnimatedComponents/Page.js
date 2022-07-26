import React from 'react'
import { motion } from 'framer-motion'

function Page({ children }) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0
            }}
            className="w-full min-h-screen"
        >
            {children}
        </motion.div>
    )
}

export default Page