"use client"
import { Notification } from 'react-iconly'

const Navbar = () => {
  return (
      <div className='flex items-center w-[70vw]'>
        <div>
          <h3 className="text-gray-200 text-lg">Hello,</h3>
          <h1 className="text-4xl font-bold">Ron Smith &#128075;</h1>
        </div>
        <div className='absolute right-10'>
          <Notification set="broken" primaryColor="white" size={28} />
        </div>
      </div>
  )
}

export default Navbar
