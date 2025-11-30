import React from 'react'
import Hero from '../component/Hero'
import FeaturedDestination from '../component/FeaturedDestination'
import ExclusiveOffers from '../component/ExclusiveOffers'
import Testimonial from '../component/Testimonial'
import RecommendedHotels from '../component/RecommendedHotels'

const Home = () => {
    return (
        <>
            <Hero />
            <RecommendedHotels />
            <FeaturedDestination />
            <ExclusiveOffers />
            <Testimonial />
        </>
    )
}

export default Home