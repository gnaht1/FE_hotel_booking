import React from 'react'
import Title from './Title'
import assets, { exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
    return (
        <div>
                    <div className='flex flex-col md:flex-row items-center justify-center w-full'>
                        <div className="w-full md:w-2/3 text-center">
                            <Title
                                align="center"
                                title="Exclusive Offers"
                                subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
                            />
                        </div>
                    </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {exclusiveOffers.map((item) => (
                    <div
                        key={item._id}
                        className='group relative flex flex-col items-start justify-between gap-4 pt-12 md:pt-16 pb-6 px-6 rounded-xl text-white min-h-[300px] hover:scale-105 transition-transform duration-300 cursor-default overflow-hidden'
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        {/* Discount Badge */}
                        <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full z-10'>
                            {item.priceOff}% OFF
                        </p>

                        {/* Content */}
                        <div className='relative z-10 mt-auto'>
                            <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                            <p className='text-sm text-gray-200 mb-3 line-clamp-2'>{item.description}</p>
                            <p className='text-xs text-gray-300'>Expires {item.expiryDate}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExclusiveOffers