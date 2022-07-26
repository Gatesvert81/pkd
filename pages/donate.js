import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Button from '../src/Components/Button'
import { AnimationContext, NavContext } from '../src/Components/Context'
import Page from '../src/AnimatedComponents/Page'


function Donate() {

    const [page, setPage] = useContext(NavContext)

    const { textAnimate, transition } = useContext(AnimationContext)

    useEffect(() => {
        if (page === "donate") return;

        setPage("donate")
    }, [])

    return (
        <Page>
            <Head>
                <title>Paul Kwame Dzeha | Home</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.main
                className='h-50vh bg-ug-clock main__bg bg-left p-0'
                transition={transition}>
                <motion.div
                    className='w-full h-full bg-faded-blue p-10 flex flex-col justify-center items-start gap-5 '
                >
                    <motion.div
                        className='w-full large__text uppercase font-bold text-white'
                        transition={transition}>
                        <motion.p {...textAnimate}>
                            Support
                        </motion.p>
                        <motion.p {...textAnimate}>
                            For Change
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.main>


            <motion.section
                className=' grid__items '
                transition={transition}>
                <motion.div className="medium__text" >
                    <motion.p {...textAnimate} >
                        I am running for SRC President
                    </motion.p>
                </motion.div>
                <motion.div transition={transition}>
                    <motion.p
                        className="normal__text text-justify"
                        {...textAnimate}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </motion.p>
                    <motion.p
                        className="normal__text text-justify"
                        {...textAnimate}>
                        Join our movement to take on the powerful and restore power to the power.
                    </motion.p>
                </motion.div>
                <motion.div
                    className='grid__items normal__text'
                    transition={transition}>
                    <motion.div transition={transition}>
                        <motion.p
                            className='card__title text-left'
                            {...textAnimate}>
                            Choose an amount
                        </motion.p>
                        <motion.p {...textAnimate}>
                            Your contribution will benefit Pual Dzeha.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className='grid__items grid-cols-2 gap-3 '
                        transition={transition}>
                        <Button style="amount__btn" >
                            $10
                        </Button>
                        <Button style="amount__btn" >
                            $25
                        </Button>
                        <Button style="amount__btn" >
                            $50
                        </Button>
                        <Button style="amount__btn" >
                            $100
                        </Button>
                        <Button style="amount__btn h-full" >
                            $250
                        </Button>
                        <Button style="amount__btn" >
                            <input type="num" placeholder='Amount' className='h-full text-xs' />
                        </Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className='grid__items normal__text'
                    transition={transition}>
                    <motion.div transition={transition}>
                        <motion.p
                            className='card__title text-left'
                            {...textAnimate}>
                            Checkout
                        </motion.p>
                        <motion.p {...textAnimate}>
                            Select Payment Method
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className='grid__items gap-2'
                        transition={transition} >
                        <Button style=" w-full primary bg-red-400" >
                            Vodafone
                        </Button>
                        <Button style="w-full primary bg-yellow-400">
                            MTN
                        </Button>
                        <Button style="w-full primary bg-blue-400">
                            AirtelTigo
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.section>
        </Page>
    )
}

export default Donate