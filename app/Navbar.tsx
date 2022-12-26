"use client"
import { Category, Notification, Search } from 'react-iconly'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
      <div>
        <h3 className="text-gray-200 md:text-lg ">Hello,</h3>
        <h1 className="md:text-4xl text-2xl font-bold">Ron Smith &#128075;</h1>
      </div>
      <div className='flex space-x-2'>
        <div className='hidden md:block p-2 hover:border hover:border-indigo-800 rounded-xl hover:bg-indigo-900 hover:text-indigo-300 hover:bg-opacity-75'>
          <Notification set="broken" size={25} />
        </div>
        <div className='hidden md:block p-2 hover:border hover:border-indigo-800 rounded-xl hover:bg-indigo-900 hover:text-indigo-300 hover:bg-opacity-75'>
          <Search set="broken" size={24} />
        </div>
        <div className='block md:hidden p-1 hover:text-[#dbdbdb]'>
          <Notification set="broken"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
