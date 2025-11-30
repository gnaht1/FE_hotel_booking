import React, { useState, useEffect } from 'react'
import HotelCard from './HotelCard'
import Title from './Title'
import { useAppContext } from '../context/AppContext';

const RecommendedHotels = () => {
    const {rooms, searchedCities} = useAppContext();
    const [recommended, setRecommended] = useState([]);

    const filterHotels = () => {
        // Debug logging
        console.log('RecommendedHotels - rooms:', rooms?.length, 'searchedCities:', searchedCities);
        
        if (!rooms || rooms.length === 0 || !Array.isArray(searchedCities) || searchedCities.length === 0) {
            setRecommended([]);
            return;
        }

        // Get all unique hotel cities for debugging
        const hotelCities = rooms.map(room => room?.hotel?.city).filter(Boolean);
        console.log('Available hotel cities:', [...new Set(hotelCities)]);
        console.log('User searched cities:', searchedCities);

        // Filter rooms where hotel city matches any searched city (case-insensitive, partial match)
        const filteredHotels = rooms.filter(room => {
            if (!room || !room.hotel || !room.hotel.city) return false;
            
            const hotelCity = room.hotel.city.toLowerCase();
            return searchedCities.some(searchedCity => 
                hotelCity.includes(searchedCity.toLowerCase()) || 
                searchedCity.toLowerCase().includes(hotelCity)
            );
        });

        console.log('Filtered recommended hotels:', filteredHotels.length);
        setRecommended(filteredHotels);
    }

    useEffect(() => {
        filterHotels()
    }, [rooms, searchedCities])

    return recommended.length > 0 && (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50
        py-20'>

            <Title title='Recommended Hotels' subTitle='Discover our handpicked selection 
            of exceptional properties around the world, offering unparalleled luxury and 
            unforgettable experiences.'/>

            <div className='mt-20 w-full max-w-6xl mx-auto overflow-x-auto'>
                <div className='flex flex-nowrap items-stretch justify-center gap-6 min-w-fit'>
                    {recommended.slice(0,4).map((room, index)=>(
                        <HotelCard key={room._id} room={room} index={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default RecommendedHotels