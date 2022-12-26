import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className='flex flex-wrap md:justify-between justify-center'>
      <Link href="/Courses/Science">
        <div className='my-3 md:w-90 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
          <Image src="https://bit.ly/3YANIRn" alt="Thumbnail" width={310} height={400} className="rounded-t-xl" />
          <div className="p-5 rounded-b-xl">
            <p className='text-sm text-slate-300 font-mono'>1hr 30min</p>
            <div className='flex justify-between'>
              <h2 className='text-xl font-bold'>PARIS Chill Lofi Work Deep Focus...</h2>
              <div className='p-1 px-2 rounded-md bg-green-100 text-stone-900 h-8 '>
                <h2 className=' font-bold'>$43</h2>
              </div>
            </div>
            <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </Link>
      
      <Link href="/Courses/Science">
        <div className='my-3 md:w-90 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
          <Image src="https://bit.ly/3YANIRn" alt="Thumbnail" width={310} height={400} className="rounded-t-xl w-full" />
          <div className="p-5 rounded-b-xl">
            <p className='text-sm text-slate-300 font-mono'>1hr 30min</p>
            <div className='flex justify-between'>
              <h2 className='text-xl font-bold'>PARIS Chill Lofi Work Deep Focus...</h2>
              <div className='p-1 px-2 rounded-md bg-green-100 text-stone-900 h-8'>
                <h2 className=' font-bold'>$43</h2>
              </div>
            </div>
            <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </Link>

      <Link href="/Courses/Science">
        <div className='my-3 md:w-90 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
          <Image src="https://bit.ly/3YANIRn" alt="Thumbnail" width={310} height={400} className="rounded-t-xl" />
          <div className="p-5 rounded-b-xl">
            <p className='text-sm text-slate-300 font-mono'>1hr 30min</p>
            <div className='flex justify-between'>
              <h2 className='text-xl font-bold'>PARIS Chill Lofi Work Deep Focus...</h2>
              <div className='p-1 px-2 rounded-md bg-green-100 text-stone-900 h-8'>
                <h2 className=' font-bold'>$43</h2>
              </div>
            </div>
            <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </Link>

      <Link href="/Courses/Science">
        <div className='my-3 md:w-90 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
          <Image src="https://bit.ly/3YANIRn" alt="Thumbnail" width={310} height={400} className="rounded-t-xl" />
          <div className="p-5 rounded-b-xl">
            <p className='text-sm text-slate-300 font-mono'>1hr 30min</p>
            <div className='flex justify-between'>
              <h2 className='text-xl font-bold'>PARIS Chill Lofi Work Deep Focus...</h2>
              <div className='p-1 px-2 rounded-md bg-green-100 text-stone-900 h-8'>
                <h2 className=' font-bold'>$43</h2>
              </div>
            </div>
            <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </Link>

    </div>
  )
}

export default Card
