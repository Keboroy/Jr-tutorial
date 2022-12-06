"use client"
import Image from 'next/image'
import { Notification } from 'react-iconly'
import Card from './Card'

export default function Home() {
  return (
    <div className='h-screen w-[70vw] overflow-hidden'>
      <div className='flex items-center'>
        <div>
          <h3 className="text-gray-200 text-lg">Hello,</h3>
          <h1 className="text-4xl font-bold">Ron Smith &#128075;</h1>
        </div>
        <div className='absolute right-10'>
          <div>
            <Notification set="broken" primaryColor="white" size={28} />
          </div>
        </div>
      </div>
      <main className='my-10'>
          <h1 className='text-2xl font-bold'>Courses</h1>
          <Card />
      </main>
    </div>
  )
}
