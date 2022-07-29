import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import NewsCard from '../src/Components/NewsCard'
import EventsCard from '../src/Components/EventsCard'
import { AnimationContext, NavContext } from '../src/Components/Context'
import Page from '../src/AnimatedComponents/Page'


function News() {

    const [page, setPage] = useContext(NavContext)

    const { textAnimate, transition } = useContext(AnimationContext)

    useEffect(() => {
        if (page === "news") return;

        setPage("news")
    }, [])

    return (
        <Page>
            <Head>
                <title>Paul Kwame Dzeha | About</title>
                <meta name="description" content="About Sir Paul" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <motion.main
                className='h-50vh bg-ug-clock main__bg bg-left p-0 '
                transition={transition}>
                <motion.div className='w-full h-full bg-faded-blue p-10 pt-16 md:px-16 flex flex-col justify-center items-start gap-5 ' >
                    <motion.div
                        className='w-full md:w-1/2 large__text uppercase font-bold text-white'
                        transition={transition}>
                        <motion.p {...textAnimate}>
                            News and events about
                        </motion.p>
                        <motion.p {...textAnimate}>
                            Campaign Progress
                        </motion.p>
                    </motion.div>
                </motion.div>
            </motion.main>

            <motion.section
                className='grid__items'
                transition={transition}
            >
                <motion.div
                    className="medium__text" >
                    <motion.p {...textAnimate} >
                        News
                    </motion.p>
                </motion.div>
                <motion.div
                    className='grid__items md:grid-cols-3'
                    transition={transition}>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </motion.div>
            </motion.section>

            <motion.section
                className='grid__items'
                transition={transition}>
                <motion.div className="medium__text" >
                    <motion.p {...textAnimate}>
                        Events
                    </motion.p>
                </motion.div>
                <motion.div
                    className='grid__items md:grid-cols-3'
                    transition={transition}>
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </motion.div>
            </motion.section>

        </Page>
    )
}

export default News