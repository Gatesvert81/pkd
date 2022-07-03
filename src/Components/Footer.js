import React, { useContext } from 'react'
import Image from 'next/image'
import Button from './Button'
import fb from '../../public/fb.png'
import ig from '../../public/ig.png'
import twitter from '../../public/twitter.png'
import AnchorLink from './AnchorLink'
import { NavContext } from './Context'


function Footer() {

    const [page, setPage] = useContext(NavContext)

    return (
        <footer className='w-full h-fit bg-main-blue p-10 md:px-16 lg:px-24 grid__items md:grid-cols-3 text-white ' >
            <div className='w-full flex flex-col justify-start items-center' >
                <div>
                    PKD
                </div>
                <div className='normal__text text-white' >
                    Subscribe to our news letters
                </div>
                <form className="w-full h-fit grid__items gap-2 " >
                    <fieldset>
                        <label> Name </label>
                        <input type="text" placeholder='Name' />
                    </fieldset>
                    <fieldset>
                        <label>Email </label>
                        <input type="email" placeholder='Email' />
                    </fieldset>
                    <fieldset className='py-3' >
                        <Button style="w-full primary" >
                            Subscribe
                        </Button>
                    </fieldset>
                </form>
            </div>
            <div className='w-full flex flex-row md:flex-col justify-center items-center gap-5' >
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
            </div>
            <div className='w-full flex flex-col justify-start md:justify-center items-center  ' >
                <div className=' flex flex-row justify-start items-center gap-3 normal__text text-white text-center' >
                    <p className="text-base" >Email:</p>
                    <p>pkd@gmail.com</p>
                </div>
                <div className=' flex flex-row justify-start items-center gap-3 normal__text text-white'>
                    <p className="text-base" >Tel:</p>
                    <p>+233 241 2543 265</p>
                </div>
                <div className=' flex flex-row justify-start items-center gap-3 normal__text text-white'>
                    <p className="text-base" >Location:</p>
                    <p>University of Ghana. Legon</p>
                </div>
                <div className='w-full flex flex-row justify-center items-center gap-3 normal__text text-white'>
                    <AnchorLink route="/facebook.com" pass target >
                        <Button
                            style='w-12 h-10 relative'>
                            <Image src={fb} layout="fill" className="object-contain" alt="facebook link" />
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/instagram.com" pass target >
                        <Button
                            style='w-12 h-10 relative'>
                            <Image src={ig} layout="fill" className="object-contain" alt="instagram link" />
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/twitter.com" pass target >
                        <Button
                            style='w-12 h-10 relative'>
                            <Image src={twitter} layout="fill" className="object-contain" alt="Twitter link" />
                        </Button>
                    </AnchorLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer