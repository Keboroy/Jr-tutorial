"use client";
import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'react-iconly'
import Banner from './Banner'
import Card from './Card'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <div className='hidden md:block'>
        <Banner />
      </div>
      <div className=''>
        {/* <div className='md:my-5 flex flex-col'>
          <div className='flex items-center space-x-2'>
            <div className='px-2 h-8 rounded-sm bg-pink-200'></div>
            <Link href={'/Courses'}>
              <h1 className='text-2xl font-bold my-5 hover:text-[#e4e4e4]'>Courses</h1>
            </Link>
          </div>
          <Card />
        </div> */}
        <div className='md:my-5 flex flex-col'>
          <div className='flex items-center space-x-2'>
            <div className='px-2 h-8 rounded-sm bg-pink-200'></div>
            <Link href={'/Courses'}>
              <h1 className='text-2xl font-bold my-5 hover:text-[#e4e4e4]'>E-Textbooks</h1>
            </Link>
          </div>
          <div className='flex flex-wrap md:justify-between justify-center'>
            <Link href="/Courses/Science">
              <div className='my-3 md:w-90 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
                <Image src="https://bit.ly/3hO2KCD" alt="Thumbnail" width={100} height={100} className="rounded-t-xl w-full h-96 object-cover object-top" />
                <div className="p-5 rounded-b-xl">
                  <div className=''>
                    <h2 className='text-xl font-bold'>9th Science and Technolo...</h2>
                  </div>
                  <div className='flex justify-between items-center space-x-1'>
                    <div className='flex items-center space-x-2'>
                      <Download set="bold" primaryColor=""/>
                      <span>Download</span>
                    </div>
                    <div className='p-1 px-2 rounded-md bg-green-100 text-stone-900 h-8 '>
                      <h2 className='font-bold'>Free</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
