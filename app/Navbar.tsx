"use client"
import { Category, Notification, Search, ChevronDown } from 'react-iconly'
import Notifications from './Notifications'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <h3 className="text-gray-200 md:text-lg ">Hello,</h3>
        <h1 className="md:text-3xl text-2xl font-bold">Ron Smith &#128075;</h1>
      </div>
      <div className='flex space-x-2 items-center'>
        <div className="dropdown dropdown-end items-center">
          <div tabIndex={0} className="bg-[#0f0f0f] hover:bg-[#131313] rounded-lg px-4 h-10 space-x-1 flex items-center"><span className='text-[#c7c7c7] text-base md:text-lg'>Class 9</span><ChevronDown set="light" size={18} /></div>
          <ul tabIndex={0} className="dropdown-content menu p-2 m-3 shadow bg-[#131313] rounded-box w-40">
            <li><a>Class 5</a></li>
            <li><a>Class 6</a></li>
            <li><a>Class 7</a></li>
            <li><a>Class 8</a></li>
            <li><a>Class 9</a></li>
            <li><a>Class 10</a></li>
            <li><a>Class 11</a></li>
            <li><a>Class 12</a></li>
          </ul>
        </div>
        {/* <div>
          <div className='rounded-full bg-[#121212] hover:bg-[#1f1f1f] px-3 space-x-2 py-1 flex items-center'>
            <span className='text-lg font-medium'>Class 9</span>
            <ChevronDown set="light" size={20}/>
          </div>
          <div>
            <div>
              <span></span>
            </div>
          </div>
        </div> */}
        <div className='hidden md:block p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <Search set="broken" size={24} />
        </div>
        <label htmlFor="my-modal-0" className='hidden md:block p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
          <Notification set="broken" size={25} />
        </label>
          <input type="checkbox" id="my-modal-0" className="modal-toggle" />
          <div className="modal cursor-pointer">
            <div className="modal-box relative">
              <label htmlFor="my-modal-0" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
             <Notifications />
            </div>
          </div>

        <div className='block md:hidden p-1 hover:text-[#dbdbdb]'>
          <Notification set="broken" />
        </div>
      </div >
    </div >
  )
}

export default Navbar
