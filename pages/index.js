import Head from 'next/head'
import Image from 'next/image'
import Button from '../src/Components/Button'
import VisionCard from '../src/Components/VisionCard'
import sir from '../public/face-left.jpg'
import AnchorLink from '../src/Components/AnchorLink'
import { useContext, useEffect } from 'react'
import { NavContext } from '../src/Components/Context'

export default function Home() {

  const [page, setPage] = useContext(NavContext)

  useEffect(() => {
    if (page === "home") return;

    setPage("home")
  }, [])

  return (
    <div className="w-full min-h-screen">
      <Head>
        <title>Paul Kwame Dzeha | Home</title>
        <meta name="description" content="SRC President - Hopefull" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='h-screen bg-face-left main__bg md:bg-top p-0 text-white' >
        <div className='w-full h-full p-10 flex flex-col bg-faded-blue justify-center items-start gap-5 ' >
          <div className=' md:w-1/2 large__text uppercase font-bold' >
            <p>Reformers</p>
            <p>with results</p>
          </div>
          <div>
            <p className=' md:w-1/2 normal__text text-base text-white' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <Button style="primary" >
              Join our movement
            </Button>
          </div>
        </div>
      </main>

      <section className='grid__items' >
        <div>
          <p className='medium__text uppercase' >About Sir Paul</p>
        </div>
        <div className='normal__text' >
          <div className='normal__text' >
            <div className='w-full md:w-1/2 h-40 md:h-60 relative md:float-left md:mr-5 md:mb-5 ' >
              <Image src={sir} layout="fill" className="object-cover" alt="pastor" />
            </div>
            <p className="normal__text text-justify" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <AnchorLink route="/about" >
              <Button style="primary" >
                Learn more
              </Button>
            </AnchorLink>
          </div>
        </div>
      </section>

      <section className='grid__items pt-0' >
        <div className='w-full text-center medium__text' >
          <p>Vision</p>
        </div>
        <div className='grid__items md:grid-cols-3' >
          <VisionCard />
          <VisionCard />
          <VisionCard />
        </div>
      </section>

      <section className='h-50vw bg-ug-clock main__bg p-0' >
        <div className='w-full h-full bg-faded-blue px-10 py-5 flex flex-col justify-start items-center  ' >
          <div className='medium__text font-bold text-white text-center ' >
            <p>Stay Updated</p>
            <p>Send us your complains</p>
          </div>
          <div className='w-full h-fit flex justify-center' >
            <form className="w-full md:w-1/2 h-fit grid__items gap-2 " >
              <fieldset>
                <label> Name </label>
                <input type="text" placeholder='Name' />
              </fieldset>
              <fieldset>
                <label> Telephone Number </label>
                <input type="text" placeholder='Email' />
              </fieldset>
              <fieldset>
                <label> Complain </label>
                <textarea type="text" placeholder='Type your Complain' />
              </fieldset>
              <fieldset className='py-3' >
                <Button style="w-full primary" >
                  Send Message
                </Button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>


    </div>
  )
}
