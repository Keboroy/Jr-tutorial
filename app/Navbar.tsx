"use client"
import { Category, Notification, Search } from 'react-iconly'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
      <div>
        <h3 className="text-gray-200 text-lg">Hello,</h3>
        <h1 className="text-4xl font-bold">Ron Smith &#128075;</h1>
      </div>
      <div className='flex space-x-2'>
        <div className='hidden md:block p-1 rounded-xl hover:bg-indigo-900 hover:text-indigo-300 hover:bg-opacity-75'>
          <Notification set="broken" size={25} />
        </div>
        <div className='hidden md:block p-1 rounded-xl hover:bg-indigo-900 hover:text-indigo-300 hover:bg-opacity-75'>
          <Search set="broken" size={24} />
        </div>
        <div className='block md:hidden p-1 rounded-xl hover:bg-indigo-900 hover:text-indigo-300 hover:bg-opacity-75'>
          <Category set="broken" size={30} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
