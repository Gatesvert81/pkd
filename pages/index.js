import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '../src/Components/Button'
import VisionCard from '../src/Components/VisionCard'
import sir from '../public/face-left.jpg'
import AnchorLink from '../src/Components/AnchorLink'
import { useContext, useEffect } from 'react'
import { AnimationContext, NavContext } from '../src/Components/Context'
import Page from '../src/AnimatedComponents/Page'

export default function Home() {

  const [page, setPage] = useContext(NavContext)
  const { textAnimate } = useContext(AnimationContext)

  useEffect(() => {
    if (page === "home") return;

    setPage("home")
  }, [])

  return (
    <Page>
      <Head>
        <title>Paul Kwame Dzeha | Home</title>
        <meta name="description" content="SRC President - Hopefull" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        className='h-screen bg-pkd-stand main__bg md:bg-top p-0 text-white'
        transition={{
          delayChildren: 0.2
        }}>
        <motion.div className='w-full h-full p-10 flex flex-col bg-faded-blue justify-center items-start gap-5 ' >
          <motion.div className=' md:w-1/2 large__text uppercase font-bold' >
            <motion.p {...textAnimate} >
              Reformers
            </motion.p>
            <motion.p {...textAnimate}>
              with results
            </motion.p>
          </motion.div>
          <motion.div>
            <motion.p {...textAnimate} className=' md:w-1/2 normal__text text-base text-white' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
          </motion.div>
          <motion.div>
            <Button style="primary" >
              Join our movement
            </Button>
          </motion.div>
        </motion.div>
      </motion.main>

      <motion.section
        className='grid__items'
        transition={{
          delayChildren: 0.2
        }}>
        <motion.div>
          <motion.p {...textAnimate} className='medium__text uppercase' >
            About Sir Paul
          </motion.p>
        </motion.div>
        <motion.div className='normal__text' >
          <motion.div
            className='normal__text'
            transition={{
              delayChildren: 0.2
            }}>
            <motion.div
              className='w-full md:w-1/2 h-48 md:h-60 relative md:float-left md:mr-5 md:mb-5 '
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              <Image
                src={sir}
                layout="fill"
                className="object-cover object-top"
                alt="pastor" />
            </motion.div>
            <motion.p {...textAnimate} className="normal__text text-justify" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </motion.p>
            <motion.p {...textAnimate}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
          </motion.div>
          <motion.div>
            <AnchorLink route="/about" >
              <Button style="primary" >
                Learn more
              </Button>
            </AnchorLink>
          </motion.div>
        </motion.div>
      </motion.section>

      <section className='grid__items pt-0' >
        <div className='w-full text-center medium__text' >
          <motion.p {...textAnimate}>
            Vision
          </motion.p>
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
            <motion.p {...textAnimate}>
              Stay Updated
            </motion.p>
            <motion.p {...textAnimate}>
              Send us your complains
            </motion.p>
          </div>
          <div className='w-full h-fit flex justify-center' >
            <motion.form
              className="w-full md:w-1/2 h-fit grid__items gap-2 "
              transition={{
                delayChildren: 0.2
              }}>
              <motion.fieldset {...textAnimate}>
                <label> Name </label>
                <input type="text" placeholder='Name' />
              </motion.fieldset>
              <motion.fieldset {...textAnimate}>
                <label> Telephone Number </label>
                <input type="text" placeholder='Email' />
              </motion.fieldset>
              <motion.fieldset {...textAnimate}>
                <label> Complain </label>
                <textarea type="text" placeholder='Type your Complain' />
              </motion.fieldset>
              <motion.fieldset {...textAnimate} className='py-3' >
                <Button style="w-full primary" >
                  Send Message
                </Button>
              </motion.fieldset>
            </motion.form>
          </div>
        </div>
      </section>
    </Page>
  )
}
