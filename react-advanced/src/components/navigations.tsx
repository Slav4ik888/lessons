import React from 'react'
import { Link } from 'react-router-dom';
import { Paths } from '../utils/routes';


export default function Navigations() {
  return (
    <nav className='flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white'>
      <Link to={Paths.ROOT}>
        <h3 className='font-bold'>Github Search</h3>
      </Link>

      <span>
        <Link to={Paths.ROOT} className='mr-2'>Home</Link>
        <Link to={Paths.FAVOURITES}>Favourites</Link>
      </span>

    </nav>
  )
}
