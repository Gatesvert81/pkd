import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { NavContext, ScrollContext } from './Context'
import AnchorLink from './AnchorLink'
import Image from 'next/image'

function Navigation() {

    const [show, handleShow] = useState(false)

    const [showNav, setShowNav] = useContext(ScrollContext)
    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc)
        return () => {
            window.removeEventListener("scroll", myFunc)
        }
    }, [])

    const animation = useAnimation()
    const sideNavAnimate = useAnimation()

    useEffect(() => {
        if (show) {
            animation.start({
                backgroundColor: 'rgba(37, 72, 136, 0.65)',
                transition: 'ease-in-out',
            })
        } else {
            animation.start({
                backgroundColor: 'transparent'
            })
        }

    }, [show])

    useEffect(() => {
        if ((show === false) === (showNav === true)) {
            animation.start({
                backgroundColor: 'rgba(37, 72, 136, 0.65)',
                transition: 'ease-in-out',
            })
        } else {
            animation.start({
                backgroundColor: 'transparent'
            })
        }
    }, [showNav])




    useEffect(() => {
        if (showNav) {
            sideNavAnimate.start({
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.2
                },
                y: 0,
                x: '0vw'
            })
        } else {
            sideNavAnimate.start({
                opacity: 0,
                scale: 0.9,
                x: '100vw'
            })
        }
    }, [showNav])

    // ${show ? " bg-faded-blue backdrop-blur shadow-md shadow-faded-blue" : "bg-transparent"} ${!show === showNav ? "bg-faded-blue backdrop-blur shadow-md shadow-faded-blue" : null} 

    return (
        <>
            <motion.nav className={`w-full h-fit fixed top-0 left-0 px-10 md:px-16 lg:px-24 py-3 flex flex-row justify-between items-center z-10 transition ease-in-out ${show ? " bg-faded-blue backdrop-blur shadow-md shadow-faded-blue" : "bg-transparent"} ${!show === showNav ? "bg-faded-blue backdrop-blur shadow-md shadow-faded-blue" : null} `}
            >
                <AnchorLink route="/">
                    <motion.div
                        className='w-20 h-10 relative  '
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }} >

                        <Image src="/PKD logo.png" layout="fill" className="object-cover object-left" alt="News Image" />
                    </motion.div>
                </AnchorLink>
                <div className='hidden md:flex md:flex-row md:justify-center md:items-center md:gap-5 ' >
                    <AnchorLink route="/" >
                        <Button
                            style={`footer__btn ${page === "home" ? "selected" : null} `}
                            click={() => {
                                setPage("home")
                                setShowNav(!showNav)
                            }}>
                            Home
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/about" >
                        <Button
                            style={`footer__btn ${page === "about" ? "selected" : null} `}
                            click={() => {
                                setPage("about")
                                setShowNav(!showNav)
                            }}>
                            About
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/news" >
                        <Button
                            style={`footer__btn ${page === "news" ? "selected" : null} `}
                            click={() => {
                                setPage("news")
                                setShowNav(!showNav)
                            }}>
                            news
                        </Button>
                    </AnchorLink>
                </div>
                <div>
                    <AnchorLink route="/donate" >
                        <Button
                            style="primary capitalize text-xs px-6 py-2"
                            click={() => {
                                setPage("donate")
                                setShowNav(false)
                            }}>
                            donate
                        </Button>
                    </AnchorLink>
                </div>
                <div className=' md:hidden flex w-8 h-8 bg-transparent flex-col justify-evenly items-center relative overflow-hidden cursor-pointer ' onClick={() => setShowNav(!showNav)} >
                    <div className={`w-full h-1 bg-main-gray transition ease-in-out ${showNav ? "-rotate-45 translate-y-2.5" : null} `} />
                    <div className={`w-full h-1 bg-main-gray ${showNav ? 'translate-x-full' : null} transition ease-in-out `} />
                    <div className={`w-full h-1 bg-main-gray transition ease-in-out ${showNav ? "rotate-45 -translate-y-2" : null} `} />
                </div>
            </motion.nav>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
            >
                <motion.nav className="fixed top-14 md:hidden right-0 left-0 bottom-0 w-full bg-faded-blue backdrop-blur  gap-10 z-10 flex flex-col justify-center items-center"
                    animate={sideNavAnimate}
                    onClick={() => setShowNav(!showNav)}
                >
                    <AnchorLink route="/" >
                        <Button
                            style={`sideNav__btn ${page === "home" ? "selected" : null} `}
                            click={() => {
                                setPage("home")
                                setShowNav(!showNav)
                            }}>
                            Home
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/about" >
                        <Button
                            style={`sideNav__btn ${page === "about" ? "selected" : null} `}
                            click={() => {
                                setPage("about")
                                setShowNav(!showNav)
                            }}>
                            About
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/donate" >
                        <Button
                            style={`sideNav__btn ${page === "donate" ? "selected" : null} `}
                            click={() => {
                                setPage("donate")
                                setShowNav(!showNav)
                            }}>
                            Donate
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/news" >
                        <Button
                            style={`sideNav__btn ${page === "news" ? "selected" : null} `}
                            click={() => {
                                setPage("news")
                                setShowNav(!showNav)
                            }}>
                            news
                        </Button>
                    </AnchorLink>
                </motion.nav>
            </AnimatePresence>
        </>
    )
}

export default Navigation