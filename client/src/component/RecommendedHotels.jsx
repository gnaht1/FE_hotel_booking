import React, { useState, useEffect } from 'react'
import HotelCard from './HotelCard'
import Title from './Title'
import { useAppContext } from '../context/AppContext';

const RecommendedHotels = () => {
    const {rooms, searchedCities} = useAppContext();
    const [recommended, setRecommended] = useState([]);

   const filterHotels = ()=>{
    const filteredHotels = rooms.slice().filter(room =>
        Array.isArray(searchedCities) && searchedCities.includes(room.hotel.city)
    );
    setRecommended(filteredHotels);
}

        useEffect(()=>{
        filterHotels()
    },[rooms, searchedCities])

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