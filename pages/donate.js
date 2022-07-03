import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Button from '../src/Components/Button'
import { NavContext } from '../src/Components/Context'


function Donate() {

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
      if (page === "donate") return;
    
      setPage("donate")
    }, [])

    return (
        <div className="w-full min-h-screen">
            <Head>
                <title>Paul Kwame Dzeha | Home</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='h-50vh bg-ug-clock main__bg bg-left p-0'>
                <div className='w-full h-full bg-faded-blue p-10 flex flex-col justify-center items-start gap-5 ' >
                    <div className='w-full large__text uppercase font-bold text-white' >
                        <p>Support</p>
                        <p>For Change</p>
                    </div>
                </div>
            </main>


            <section className=' grid__items ' >
                <div className="medium__text" >
                    <p>I am running for SRC President</p>
                </div>
                <div>
                    <p className="normal__text text-justify" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="normal__text text-justify">
                        Join our movement to take on the powerful and restore power to the power.
                    </p>
                </div>
                <div className='grid__items normal__text' >
                    <div>
                        <p className='card__title text-left' >Choose an amount</p>
                        <p>
                            Your contribution will benefit Pual Dzeha.
                        </p>
                    </div>
                    <div className='grid__items grid-cols-2 gap-3 ' >
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
                    </div>
                </div>
                <div className='grid__items normal__text'>
                    <div>
                        <p className='card__title text-left' >Checkout</p>
                        <p>
                            Select Payment Method
                        </p>
                    </div>
                    <div className='grid__items gap-2' >
                        <Button style=" w-full primary bg-red-400" >
                            Vodafone
                        </Button>
                        <Button style="w-full primary bg-yellow-400">
                            MTN
                        </Button>
                        <Button style="w-full primary bg-blue-400">
                            AirtelTigo
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Donate