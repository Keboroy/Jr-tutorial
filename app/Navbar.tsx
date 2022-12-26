"use client"
import { Category, Notification, Search, ChevronDown } from 'react-iconly'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center '>
      <div>
        <h3 className="text-gray-200 text-lg">Hello,</h3>
        <h1 className="text-4xl font-bold">Ron Smith &#128075;</h1>
      </div>
      <div className='flex space-x-2 items-center'>
        <div>
          <div className='rounded-full bg-[#121212] hover:bg-[#1f1f1f] px-3 space-x-2 py-1 flex items-center'>
            <span className='text-lg font-medium'>Class 9</span>
            <ChevronDown set="light" size={20}/>
          </div>
          <div>
            <div>
              <span></span>
            </div>
          </div>
        </div>
        <div className='hidden md:block p-2 hover:border hover:border-indigo-800 rounded-xl hover:bg-indigo-900 hover:text-indigo-300 hover:bg-opacity-75'>
          <Notification set="broken" size={25} />
        </div>
        <div className='hidden md:block p-2 hover:border hover:border-indigo-800 rounded-xl hover:bg-indigo-900 hover:text-indigo-300 hover:bg-opacity-75'>
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
