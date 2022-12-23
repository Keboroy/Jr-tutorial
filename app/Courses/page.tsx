import React from 'react'
import Link from "next/link"
import Card from '../Card'
const page = () => {
  return (
    <div className='md:my-5 flex flex-col'>
      <div className='flex items-center space-x-2'>
        <div className='px-2 h-8 rounded-sm bg-pink-200'></div>
        <Link href={'/Courses'}>
          <h1 className='text-4xl font-bold my-5 hover:text-[#e4e4e4]'>Courses</h1>
        </Link>
      </div>
      <Card />
    </div>
  )
}

export default page
