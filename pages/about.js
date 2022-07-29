import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { Client } from '@notionhq/client'
import Image from 'next/image'
import sir from '../public/face-left.jpg'
import { motion } from 'framer-motion'
import { AnimationContext, NavContext } from '../src/Components/Context'
import Page from '../src/AnimatedComponents/Page'


export default function About() {

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
                            The face behind the PKD Movement
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
                        className='w-full md:w-40 h-48 relative md:float-left md:mr-5 mb-5 '
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}>
                        <Image src="/pkd-sit.jpg" layout="fill" className="object-cover object-top" alt="Sir Paul" />
                    </motion.div>
                    <motion.p
                        className="normal__text text-justify"
                        {...textAnimate}>
                        Paul Kwame Dzeha (PKD) is a young but brilliant and influential gentleman offering a combined major in Economics and Mathematics as a student of the University of Ghana.
                        He is a staunch Christian who believes in integrity, consistency, and excellence. Paul is also an alumnus of the notable St. Augustine&#39;s College where he had his Secondary school education and served as the Sports Prefect, fondly known as scriptures.
                        Paul is a multitalented young man having exceptional skills in playing the keyboard, planning skills, and analytical skills. He also plays basketball and is very good at Chess. What a versatile gentleman!
                    </motion.p>
                    <motion.div
                        className='w-full md:w-40 h-48 relative md:float-left md:mr-5 mb-5 '
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}>
                        <Image src="/pkd-pocket.jpg" layout="fill" className="object-cover object-top" alt="Sir Paul" />
                    </motion.div>
                    <motion.p
                        className="normal__text text-justify"
                        {...textAnimate}>
                        Paul is an epitome of service and excellence as he currently serves in his church, ICGC Cornerstone Temple, as their keyboardist and in a commission, Life to the Nations Global Outreach, as their Coordinator.

                        In the commission, he won 3 awards for being the best, the best, and the best
                        With diligence and excellence, he was able to achieve these victories

                        With the passion and love, he has to help people, and in obedience to the voice of his Father in the Lord, he also began his own ministry, The Royal Priesthood Family which is 2 years now but celebrated its 1 year anniversary of in-person meetings on the 18th of July, 2022.

                        Who better to lead a student body than a man who heeds to the authorities in his life, a man of service and great leadership skills.
                    </motion.p>
                </motion.div>
            </motion.section>
            {/* <motion.section className='grid__items' >
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
            </motion.section> */}
        </Page>
    )
}

