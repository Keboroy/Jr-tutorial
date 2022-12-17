import React from 'react'
import Image from 'next/image'
import Playlist from '../playlist'
const page = () => {
  return (
    <div className='my-5 flex justify-between space-x-5'>
      <div className=''>
        <span className='text-lg text-[#aaaaaa] font-bold'>COURSE</span>
        <div className=' my-5'>
          <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={750} height={400} className="rounded-xl" />
          <div className='my-3'>
          <div className="flex space-x-3">
            <button className='border-b-2 border-gray-600 text-white px-2 font-medium'>Overview</button>
            <button className='hover:border-b-2 border-gray-600 text-white px-2 font-medium'>Downloads</button>
            <button className='hover:border-b-2 border-gray-600 text-white px-2 font-medium'>Comments</button>
            <button className='hover:border-b-2 border-gray-600 text-white px-2 font-medium'>Announcements</button>
          </div>
          <h2 className='my-3 text-2xl font-medium'>Trending Songs non stop lofi Songs [Slowed N Reverb]</h2>
          </div>
        </div>
      </div>
      <Playlist />
    </div>
  )
}

export default page
