"use client"
import Image from 'next/image'
import { Notification } from 'react-iconly'
import Card from './Card'

export default function Home() {
  return (
      <main className='my-10 w-[75vw] overflow-hidden'>
        <h1 className='text-2xl font-bold my-5'>Courses</h1>
        {/* <Card /> */}
        <div className='flex flex-wrap justify-center'>
          <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
            <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={280} className="rounded-t-xl" />
            <div className="p-5 w-80 rounded-b-xl">
              <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
              <h2 className='text-xl font-bold'>Hello world</h2>
              <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
            <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={280} className="rounded-t-xl" />
            <div className="p-5 w-80 rounded-b-xl">
              <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
              <h2 className='text-xl font-bold'>Hello world</h2>
              <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
            <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={280} className="rounded-t-xl" />
            <div className="p-5 w-80 rounded-b-xl">
              <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
              <h2 className='text-xl font-bold'>Hello world</h2>
              <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
            <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={280} className="rounded-t-xl" />
            <div className="p-5 w-80 rounded-b-xl">
              <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
              <h2 className='text-xl font-bold'>Hello world</h2>
              <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
            <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={280} className="rounded-t-xl" />
            <div className="p-5 w-80 rounded-b-xl">
              <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
              <h2 className='text-xl font-bold'>Hello world</h2>
              <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
            <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={280} className="rounded-t-xl" />
            <div className="p-5 w-80 rounded-b-xl">
              <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
              <h2 className='text-xl font-bold'>Hello world</h2>
              <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
            <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={280} className="rounded-t-xl" />
            <div className="p-5 w-80 rounded-b-xl">
              <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
              <h2 className='text-xl font-bold'>Hello world</h2>
              <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
            <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={280} className="rounded-t-xl" />
            <div className="p-5 w-80 rounded-b-xl">
              <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
              <h2 className='text-xl font-bold'>Hello world</h2>
              <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
            <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={280} className="rounded-t-xl" />
            <div className="p-5 w-80 rounded-b-xl">
              <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
              <h2 className='text-xl font-bold'>Hello world</h2>
              <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </main>
  )
}
