import React from 'react'
import Hero from '../component/Hero'
import FeaturedDestination from '../component/FeaturedDestination'
import ExclusiveOffers from '../component/ExclusiveOffers'
import Testimonial from '../component/Testimonial'
import NewsLetter from '../component/NewsLetter'
import RecommendedHotels from '../component/HotelOwner/RecommendedHotels'

const Home = () => {
    return (
        <>
            <Hero />
            <RecommendedHotels />
            <FeaturedDestination />
            <ExclusiveOffers />
            <Testimonial />
            <NewsLetter />
        </>
    )
}

export default Home