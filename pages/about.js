import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import sir from '../public/face-left.jpg'
import { NavContext } from '../src/Components/Context'


function About() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
        if (page === "about") return;

        setPage("about")
    }, [])

    return (
        <div className="w-full min-h-screen">
            <Head>
                <title>Paul Kwame Dzeha | About</title>
                <meta name="description" content="About Sir Paul" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='h-screen bg-face-right main__bg bg-left-top p-0' >
                <div className='w-full h-full bg-faded-blue p-10 flex flex-col justify-center items-start gap-5 ' >
                    <div className='w-full large__text uppercase font-bold text-white' >
                        <p>about</p>
                        <p>Paul Dzeha</p>
                    </div>
                    <div>
                        <p className='text-base text-white font-semibold' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </main>
            <section className='grid__items' >
                <div className="medium__text" >
                    <p>Journey</p>
                </div>
                <div>
                    <div className='w-full md:w-40 h-40 relative md:float-left md:mr-5 mb-5 ' >
                        <Image src={sir} layout="fill" className="object-cover" alt="Sir Paul" />
                    </div>
                    <p className="normal__text text-justify" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                    <p className="normal__text text-justify" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                </div>
            </section>
            <section className='grid__items' >
                <div className="medium__text" >
                    <p>Mission to</p>
                    <p>Accomplish</p>
                </div>
                <div className='grid__items' >
                    <p className="normal__text text-justify" >
                        <span className='w-fit h-fit large__text relative md:float-left md:mr-5 md:mb-5 '>01</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                    <p className="normal__text text-justify" >
                        <span className='w-fit h-fit large__text relative md:float-left md:mr-5 md:mb-5 '>02</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                    <p className="normal__text text-justify" >
                        <span className='w-fit h-fit large__text relative md:float-left md:mr-5 md:mb-5 '>03</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                </div>
            </section>
            <section className='grid__items' >
                <div className="medium__text" >
                    <p>Campaign</p>
                    <p>Team</p>
                </div>
                <div className='grid__items md:grid-cols-3'>
                    <div className='w-full h-40 relative ' >
                        <Image src={sir} layout="fill" className="object-cover float-left m-5 " alt="sir" />
                    </div>
                    <div className='w-full h-40 relative ' >
                        <Image src={sir} layout="fill" className="object-cover float-left m-5 " alt="sir" />
                    </div>
                    <div className='w-full h-40 relative ' >
                        <Image src={sir} layout="fill" className="object-cover float-left m-5 " alt="sir" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About