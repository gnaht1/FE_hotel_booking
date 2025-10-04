import React from 'react'
import assets from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const sidebarLinks = [
        {
            name: 'Dashboard',
            path: '/owner',
            icon: assets.dashboardIcon
        },
        {
            name: 'Add Room',
            path: '/owner/add-room',
            icon: assets.addIcon
        },
        {
            name: 'List Room',
            path: '/owner/list-room',
            icon: assets.listIcon
        },
        
    ]
  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col 
    transition-all duration-300 bg-white shadow-sm'>
      {sidebarLinks.map((item, index) => (
        <NavLink key={index} to={item.path} end={item.path === '/owner'} 
        className={({isActive}) => `flex items-center py-3 px-4 md:px-8 gap-3 transition-colors duration-200 hover:bg-gray-100 ${isActive ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700 hover:text-gray-900'}`}>
          <img src={item.icon} alt={item.name} className='w-5 h-5'></img>
          <p className='hidden md:block text-center'>{item.name}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar