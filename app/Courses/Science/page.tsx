import React from 'react'
import Image from 'next/image'
import Playlist from '../playlist'

const page = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div className='my-5 flex md:justify-between md:flex-row flex-col md:space-x-5'>
      <div className='border-b border-[#0e0e0e]'>
        <span className='text-lg text-white font-bold'>COURSE</span>
        <div className=' my-5'>
          <Image src="https://bit.ly/3YANIRn" alt="Thumbnail" width={700} height={400} className="rounded-xl" />
          <div className='my-3'>
            <div className="flex space-x-3">
              <button className='border-b-2 border-gray-600 text-white md:px-2 md:font-medium '>Overview</button>
              <button className='hover:border-b-2 border-gray-600 text-white md:px-2 md:font-medium '>Downloads</button>
              <button className='hover:border-b-2 border-gray-600 text-white md:px-2 md:font-medium '>Comments</button>
              <button className='hover:border-b-2 border-gray-600 text-white md:px-2 md:font-medium '>Announcements</button>
            </div>
            <div>
              <h2 className='my-3 text-2xl font-medium'>Trending Songs non stop lofi Songs [Slowed N Reverb]</h2>
            </div>
          </div>
        </div>
      </div>
      <Playlist />
    </div>
  )
}

export default page
