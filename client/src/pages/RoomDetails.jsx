import React from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'
import { useState, useEffect } from 'react'

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
        </div>
    )
}

export default RoomDetails