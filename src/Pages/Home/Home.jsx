import React from 'react'
import Hero from './Hero'
import Whoweare from './Whoweare'
import { Ourproduct } from './Ourproducts'
import Contact from './Contact'
import Faq from './Faq'

const Home = () => {
  return (
    <section>
        <Hero/>
        <Whoweare />
            <Ourproduct/>
            <Contact />
            <Faq />
    </section>
  )
}

export default Home