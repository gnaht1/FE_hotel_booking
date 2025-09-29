import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const ExclusiveOffers = () => {
    return (
        <div className='flex flex-col items-center px-6 md:px-16 1g:px-24 xl:px-32
pt-20 pb-30'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                <Title align="left" title="Exclusive Offers" subTitle="Take advantage of our limited-time 
                offers and special packages to enhance your stay and create unforgettable memories." />
                <button className='flex items-center gap-2 group cursor-pointer hover:cursor-pointer'>
                    View All Offers
                    <img src={assets.arrowIcon} alt="arrow-icon"
                        className='w-4 h-4 group-hover:translate-x-1 transition-all' />
                </button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default ExclusiveOffers