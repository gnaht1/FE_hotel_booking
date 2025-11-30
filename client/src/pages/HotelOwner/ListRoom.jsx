import React, { useState, useEffect } from 'react'
import Title from '../../component/Title'
import { useAppContext } from '../../context/AppContext'
import { toast } from 'react-hot-toast'

const ListRoom = () => {

    const [rooms, setRooms] = useState([])
    const [showEditModal, setShowEditModal] = useState(false)
    const [editingRoom, setEditingRoom] = useState(null)
    const [editForm, setEditForm] = useState({
        roomType: '',
        pricePerNight: '',
        amenities: {
            'WiFi': false,
            'Breakfast': false,
            'Room Service': false,
            'Pool': false
        }
    })
    
    // Available amenities list
    const availableAmenities = ['WiFi', 'Breakfast', 'Room Service', 'Pool']
    
    const {axios, getToken, user, currency} = useAppContext()

    // Fetch Rooms of Hotel Owner
    const fetchRooms = async ()=>{
        try {
            const {data} = await axios.get('/api/rooms/owner', {headers: {Authorization: `Bearer ${await getToken()}`}})
            if(data.success){
                setRooms(data.rooms)
            } else {
                toast.error(data.message)
            }
        }catch (error) {
            toast.error(error.message)

        }
    }

    // Toggle Room Availability
    const toggleRoomAvailability = async (roomId)=>{
        
        const {data} = await axios.post('/api/rooms/toggle-availability', {roomId}, {headers: {Authorization: `Bearer ${await getToken()}`}})
        if(data.success){
            toast.success(data.message)
            fetchRooms()
        } else {
            toast.error(data.message)
        }
        
    }

    // Open Edit Modal
    const handleEditClick = (room) => {
        setEditingRoom(room)
        // Convert amenities array to object with boolean values
        const amenitiesObj = {
            'WiFi': room.amenities.includes('WiFi'),
            'Breakfast': room.amenities.includes('Breakfast'),
            'Room Service': room.amenities.includes('Room Service'),
            'Pool': room.amenities.includes('Pool')
        }
        setEditForm({
            roomType: room.roomType,
            pricePerNight: room.pricePerNight,
            amenities: amenitiesObj
        })
        setShowEditModal(true)
    }

    // Handle Edit Form Change
    const handleEditFormChange = (e) => {
        const { name, value } = e.target
        setEditForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Handle Amenities Change
    const handleAmenityToggle = (amenity) => {
        setEditForm(prev => ({
            ...prev,
            amenities: {
                ...prev.amenities,
                [amenity]: !prev.amenities[amenity]
            }
        }))
    }

    // Update Room
    const handleUpdateRoom = async (e) => {
        e.preventDefault()
        try {
            // Convert amenities object to array of selected amenities
            const selectedAmenities = Object.keys(editForm.amenities).filter(key => editForm.amenities[key])
            
            const formData = new FormData()
            formData.append('roomType', editForm.roomType)
            formData.append('pricePerNight', editForm.pricePerNight)
            formData.append('amenities', JSON.stringify(selectedAmenities))

            const {data} = await axios.put(`/api/rooms/${editingRoom._id}`, formData, {
                headers: {
                    Authorization: `Bearer ${await getToken()}`,
                    'Content-Type': 'application/json'
                }
            })

            if(data.success){
                toast.success(data.message)
                setShowEditModal(false)
                fetchRooms()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // Delete Room
    const handleDeleteRoom = async (roomId) => {
        if(!window.confirm('Are you sure you want to delete this room? This action cannot be undone.')) {
            return
        }

        try {
            const {data} = await axios.delete(`/api/rooms/${roomId}`, {
                headers: {Authorization: `Bearer ${await getToken()}`}
            })

            if(data.success){
                toast.success(data.message)
                fetchRooms()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if(user){
            fetchRooms()
        }
    }, [user])

    return (
        <div>
            <Title align='left' font='outfit' title='Room Listings' subTitle='View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.' />
            <p className='text-gray-500 mt-8'>All Rooms</p>

            <div className='w-full max-w-5xl text-left border border-gray-300 rounded-lg max-h-96 overflow-y-scroll mt-3'>
                <table className='w-full'>
                <thead className='bg-gray-50'>
    <tr>
        <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
        <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facility</th>
        <th className='py-3 px-4 text-gray-800 font-medium'>Price / night</th>
        <th className='py-3 px-4 text-gray-800 font-medium text-center'>Available</th>
        <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
    </tr>
</thead>
<tbody className='text-sm'>
{
    rooms.map((item, index)=>(
        <tr key={index}>
            <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                {item.roomType}
            </td>
            <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                {item.amenities.join(', ')}
            </td>
            <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                {currency} {item.pricePerNight}
            </td>
            <td className='py-3 px-4 border-t border-gray-300 text-center'>
    <label className='relative inline-flex items-center cursor-pointer text-gray-900 justify-center'>
        <input onChange={()=>toggleRoomAvailability(item._id)} type="checkbox" className='sr-only peer' checked={item.isAvailable}/>
        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
    </label>
</td>
            <td className='py-3 px-4 border-t border-gray-300 text-center'>
                <div className='flex gap-2 justify-center'>
                    <button 
                        onClick={() => handleEditClick(item)}
                        className='px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
                    >
                        Edit
                    </button>
                    <button 
                        onClick={() => handleDeleteRoom(item._id)}
                        className='px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors'
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    ))
}

</tbody>
                </table>
            </div>

            {/* Edit Modal */}
            {showEditModal && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
                    <div className='bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto'>
                        <div className='flex justify-between items-center mb-4'>
                            <h2 className='text-xl font-semibold text-gray-800'>Edit Room</h2>
                            <button 
                                onClick={() => setShowEditModal(false)}
                                className='text-gray-500 hover:text-gray-700 text-2xl'
                            >
                                ×
                            </button>
                        </div>
                        
                        <form onSubmit={handleUpdateRoom} className='space-y-4'>
                            <div>
                                <label className='block text-gray-700 mb-2'>Room Type</label>
                                <input 
                                    type="text"
                                    name="roomType"
                                    value={editForm.roomType}
                                    onChange={handleEditFormChange}
                                    className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    required
                                />
                            </div>

                            <div>
                                <label className='block text-gray-700 mb-2'>Price Per Night</label>
                                <input 
                                    type="number"
                                    name="pricePerNight"
                                    value={editForm.pricePerNight}
                                    onChange={handleEditFormChange}
                                    className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    required
                                />
                            </div>

                            <div>
                                <label className='block text-gray-700 mb-2'>Amenities</label>
                                <div className='space-y-2'>
                                    {availableAmenities.map((amenity, index) => (
                                        <div key={index} className='flex items-center gap-2'>
                                            <input
                                                type='checkbox'
                                                id={`edit-amenity-${index}`}
                                                checked={editForm.amenities[amenity]}
                                                onChange={() => handleAmenityToggle(amenity)}
                                                className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
                                            />
                                            <label 
                                                htmlFor={`edit-amenity-${index}`}
                                                className='text-gray-700 cursor-pointer'
                                            >
                                                {amenity}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='flex gap-3 mt-6'>
                                <button 
                                    type="submit"
                                    className='flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors'
                                >
                                    Update Room
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => setShowEditModal(false)}
                                    className='flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition-colors'
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ListRoom