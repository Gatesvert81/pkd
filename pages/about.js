import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import sir from '../public/face-left.jpg'
import { motion } from 'framer-motion'
import { AnimationContext, NavContext } from '../src/Components/Context'
import Page from '../src/AnimatedComponents/Page'


function About() {

    const [page, setPage] = useContext(NavContext)

    const { textAnimate, transition } = useContext(AnimationContext)

    useEffect(() => {
        if (page === "about") return;

        setPage("about")
    }, [])

    return (
        <Page>
            <Head>
                <title>Paul Kwame Dzeha | About</title>
                <meta name="description" content="About Sir Paul" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.main
                className='h-screen bg-face-right main__bg bg-left-top p-0'
                transition={transition}
            >
                <motion.div
                    className='w-full h-full bg-faded-blue p-10 flex flex-col justify-center items-start gap-5 '
                    transition={transition} >
                    <motion.div className='w-full large__text uppercase font-bold text-white' >
                        <motion.p {...textAnimate} >
                            about
                        </motion.p>
                        <motion.p {...textAnimate}>
                            Paul Dzeha
                        </motion.p>
                    </motion.div>
                    <motion.div>
                        <motion.p className='text-base text-white font-semibold' {...textAnimate} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.main>
            <motion.section
                className='grid__items'
                transition={transition}>
                <motion.div className="medium__text" >
                    <motion.p {...textAnimate} >
                        Journey
                    </motion.p>
                </motion.div>
                <motion.div>
                    <motion.div
                        className='w-full md:w-40 h-40 relative md:float-left md:mr-5 mb-5 '
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}>
                        <Image src={sir} layout="fill" className="object-cover" alt="Sir Paul" />
                    </motion.div>
                    <motion.p
                        className="normal__text text-justify"
                        {...textAnimate}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </motion.p>
                    <motion.p
                        className="normal__text text-justify"
                        {...textAnimate}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </motion.p>
                </motion.div>
            </motion.section>
            <motion.section className='grid__items' >
                <motion.div className="medium__text" >
                    <motion.p {...textAnimate}>
                        Mission to
                    </motion.p>
                    <motion.p {...textAnimate}>
                        Accomplish
                    </motion.p>
                </motion.div>
                <motion.div className='grid__items' >
                    <motion.p
                        className="normal__text text-justify"
                        {...textAnimate}>
                        <span className='w-fit h-fit large__text relative md:float-left md:mr-5 md:mb-5 '>01</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </motion.p>
                    <motion.p
                        className="normal__text text-justify"
                        {...textAnimate}>
                        <span className='w-fit h-fit large__text relative md:float-left md:mr-5 md:mb-5 '>02</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </motion.p>
                    <motion.p
                        className="normal__text text-justify"
                        {...textAnimate}>
                        <span className='w-fit h-fit large__text relative md:float-left md:mr-5 md:mb-5 '>03</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </motion.p>
                </motion.div>
            </motion.section>
            <motion.section
                className='grid__items'
                transition={transition}>
                <motion.div className="medium__text" >
                    <motion.p {...textAnimate}>
                        Campaign
                    </motion.p>
                    <motion.p {...textAnimate}>
                        Team
                    </motion.p>
                </motion.div>
                <motion.div
                    className='grid__items md:grid-cols-3'
                    transition={transition}>
                    <motion.div
                        className='w-full h-40 relative '
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}>
                        <Image src={sir} layout="fill" className="object-cover float-left m-5 " alt="sir" />
                    </motion.div>
                    <motion.div
                        className='w-full h-40 relative '
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}>
                        <Image src={sir} layout="fill" className="object-cover float-left m-5 " alt="sir" />
                    </motion.div>
                    <motion.div
                        className='w-full h-40 relative '
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}>
                        <Image src={sir} layout="fill" className="object-cover float-left m-5 " alt="sir" />
                    </motion.div>
                </motion.div>
            </motion.section>
        </Page>
    )
}

export default About