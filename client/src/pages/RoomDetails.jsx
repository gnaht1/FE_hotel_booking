import React from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData, facilityIcons } from '../assets/assets'
import { useState, useEffect } from 'react'
import StarRating from '../component/StarRating'
import assets from '../assets/assets'

const RoomDetails = () => {
    const { id } = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState([])

    useEffect(() => {
        const room = roomsDummyData.find((room) => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [id])

    return room && (
        <div className="py-24 md:py-32 px-4 sm:px-6 lg:px-24 xl:px-32">
            {/* Room Details */}
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 flex-wrap">
                    <h1 className="text-3xl md:text-4xl font-playfair tracking-tight">
                        {room.hotel.name}{" "}
                        <span className="text-lg md:text-xl font-normal text-gray-600">
                            ({room.roomType})
                        </span>
                    </h1>

                    <span className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full md:ml-3">
                        20% OFF
                    </span>
                </div>
            </div>

            {/* Room Rating */}
            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ Reviews</p>
            </div>

            {/*Room Address */}
            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
            </div>

            {/*Room Images */}
            <div className='flex flex-col md:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt="Room Image"
                        className='w-full rounded-xl shadow-lg object-cover' />
                </div>

                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room?.images.map((image, index) => (
                        <img
                            onClick={() => setMainImage(image)}
                            key={index}
                            src={image}
                            alt="Room Image"
                            className={`w-full rounded-xl shadow-lg object-cover cursor-pointer ${mainImage === image ? 'outline-3 outline-orange-500' : ''}`}
                        />
                    ))}
                </div>
            </div>

            {/* Room Highlights & Price */}
            <div className='flex flex-col md:flex-row md:justify-between mt-10 items-start md:items-center'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl font-playfair'>
                        Experience Luxury Like Never Before
                    </h1>
                    <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                        {room.amenities.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Room Price */}
                <div className="mt-4 md:mt-0 md:ml-8 flex-shrink-0">
                    <p className='text-3xl font-medium'>
                        ${room.pricePerNight} <span className="text-base font-normal text-gray-500">/ night</span>
                    </p>
                </div>
            </div>

            {/*Check in & out form*/}
            <form className='flex flex-col md:flex-row items-start md:items-center
justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

                    <div className='flex flex-col'>
                        <label htmlFor='checkInDate' className='font-medium'>Check in</label>
                        <input type='date' id='checkInDate' placeholder='Check in'
                            className='w-full rounded border border-gray-200 px-3 py-2 mt-1.5 outline-none' required />
                    </div>

                    <div className='w-px h-15 bg-gray-300/70 max-hd:hidden'></div>

                    <div className='flex flex-col'>
                        <label htmlFor='checkOutDate' className='font-medium'>Check Out</label>
                        <input type='date' id='checkOutDate' placeholder='Check out'
                            className='w-full rounded border border-gray-200 px-3 py-2 mt-1.5 outline-none' required />
                    </div>

                    <div className='w-px h-15 bg-gray-300/70 max-hd:hidden'>

                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='guests' className='font-medium'>Guests</label>
                        <input type='number' id='guests' placeholder='0' min='1'
                            className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>

                </div>

                <button type='submit' className='bg-blue-500 hover:bg-blue-600 active:scale-95 
                transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-6 py-3 md:py-4 text-base 
                cursor-pointer font-medium'>
                    Check Availability
                </button>
            </form>

            {/*Common Specifications*/}
            <div>
                {room}
            </div>

        </div>
    )
}


export default RoomDetails