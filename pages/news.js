import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import NewsCard from '../src/Components/NewsCard'
import EventsCard from '../src/Components/EventsCard'
import { NavContext } from '../src/Components/Context'


function News() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "news") return;
    
      setPage("news")
    }, [])

    return (
        <div className="w-full min-h-screen">
            <Head>
                <title>Paul Kwame Dzeha | About</title>
                <meta name="description" content="About Sir Paul" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='min-h-60vh bg-ug-clock main__bg bg-left p-0'>
                <div className='w-full h-full bg-faded-blue p-10 md:py-16 flex flex-col justify-center items-start gap-5 ' >
                    <div className='w-full md:w-1/2 large__text uppercase font-bold text-white' >
                        <p>News and events about</p>
                        <p>Campaign Progress</p>
                    </div>
                </div>
            </main>

            <section className='grid__items' >
                <div className="medium__text" >
                    <p>News</p>
                </div>
                <div className='grid__items md:grid-cols-3'>
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
            </section>

            <section className='grid__items' >
                <div className="medium__text" >
                    <p>News</p>
                </div>
                <div className='grid__items md:grid-cols-3'>
                    <EventsCard />
                    <EventsCard />
                    <EventsCard />
                </div>
            </section>

        </div>
    )
}

export default News