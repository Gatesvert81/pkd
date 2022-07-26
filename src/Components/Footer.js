import React, { useContext } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from './Button'
import fb from '../../public/fb.png'
import ig from '../../public/ig.png'
import twitter from '../../public/twitter.png'
import AnchorLink from './AnchorLink'
import { AnimationContext, NavContext } from './Context'


function Footer() {

    const [page, setPage] = useContext(NavContext)
    const { textAnimate, transition } = useContext(AnimationContext)

    return (
        <motion.footer
            className='w-full h-fit bg-main-blue p-10 md:px-16 lg:px-24 grid__items md:grid-cols-3 text-white '
            transition={transition}>
            <motion.div
                className='w-full flex flex-col justify-start items-center'
                transition={transition}>
                <AnchorLink route="/">
                    <motion.div
                        className='w-40 h-20 relative '
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }} >

                        <Image src="/PKD logo.png" layout="fill" className="object-cover" alt="News Image" />
                    </motion.div>
                </AnchorLink>
                <motion.div
                    className='normal__text text-white'
                    {...textAnimate}
                >
                    Subscribe to our news letters
                </motion.div>
                <motion.form
                    className="w-full h-fit grid__items gap-2 "
                    transition={transition}>
                    <motion.fieldset {...textAnimate}>
                        <label> Name </label>
                        <input type="text" placeholder='Name' />
                    </motion.fieldset>
                    <motion.fieldset {...textAnimate}>
                        <label>Email </label>
                        <input type="email" placeholder='Email' />
                    </motion.fieldset>
                    <motion.fieldset className='py-3' >
                        <Button style="w-full primary" >
                            Subscribe
                        </Button>
                    </motion.fieldset>
                </motion.form>
            </motion.div>
            <motion.div className='w-full flex flex-row md:flex-col justify-center items-center gap-5' >
                <AnchorLink route="/" >
                    <Button
                        style={`footer__btn ${page === "home" ? "selected" : null} `}
                        click={() => {
                            setPage("home")
                        }}>
                        Home
                    </Button>
                </AnchorLink>
                <AnchorLink route="/about" >
                    <Button
                        style={`footer__btn ${page === "about" ? "selected" : null} `}
                        click={() => {
                            setPage("about")
                        }}>
                        About
                    </Button>
                </AnchorLink>
                <AnchorLink route="/donate" >
                    <Button
                        style={`footer__btn ${page === "donate" ? "selected" : null} `}
                        click={() => {
                            setPage("donate")
                        }}>
                        donate
                    </Button>
                </AnchorLink>
                <AnchorLink route="/news" >
                    <Button
                        style={`footer__btn ${page === "news" ? "selected" : null} `}
                        click={() => {
                            setPage("news")
                        }}>
                        news
                    </Button>
                </AnchorLink>
            </motion.div>
            <motion.div
                className='w-full flex flex-col justify-start md:justify-center items-center  '
                transition={transition}>
                <motion.div
                    className=' flex flex-row justify-start items-center gap-3 normal__text text-white text-center'
                    {...textAnimate} >
                    <motion.p className="text-base" >
                        Email:
                    </motion.p>
                    <motion.p >
                        pkd@gmail.com
                    </motion.p>
                </motion.div>
                <motion.div
                    className=' flex flex-row justify-start items-center gap-3 normal__text text-white'
                    {...textAnimate}>
                    <motion.p className="text-base" >
                        Tel:
                    </motion.p>
                    <motion.p>
                        +233 241 2543 265
                    </motion.p>
                </motion.div>
                <motion.div
                    className=' flex flex-row justify-start items-center gap-3 normal__text text-white'
                    {...textAnimate}>
                    <motion.p className="text-base" >
                        Location:
                    </motion.p>
                    <motion.p>
                        University of Ghana. Legon
                    </motion.p>
                </motion.div>
                <motion.div
                    className='w-full flex flex-row justify-center items-center gap-3 normal__text text-white'
                    transition={transition}>
                    <AnchorLink route="/facebook.com" pass target >
                        <Button
                            style='w-12 h-10 relative'>
                            <Image src={fb} layout="fill" className="object-contain" alt="facebook link" />
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="https://www.instagram.com/@_.scriptures" pass target >
                        <Button
                            style='w-12 h-10 relative'>
                            <Image src={ig} layout="fill" className="object-contain" alt="instagram link" />
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="https://www.twitter.com/@DzehaPaul" pass target >
                        <Button
                            style='w-12 h-10 relative'>
                            <Image src={twitter} layout="fill" className="object-contain" alt="Twitter link" />
                        </Button>
                    </AnchorLink>
                </motion.div>
            </motion.div>
        </motion.footer>
    )
}

export default Footer