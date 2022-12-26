
import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'react-iconly'
import Banner from './Banner'
import Card from './Card'
import Ebok_card from './ebok_card'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <div className='hidden md:block'>
        <Banner />
      </div>
      <div className=''>
        <div className='md:my-5 flex flex-col'>
          <div className='flex items-center space-x-2'>
            <div className='px-2 h-8 rounded-sm bg-pink-200'></div>
            <Link href={'/Courses'}>
              <h1 className='text-2xl font-bold my-5 hover:text-[#e4e4e4]'>E-Textbooks</h1>
            </Link>
          </div>
          {/* <Card /> */}
          <Ebok_card />
        </div>
      </div>
    </main>
  )
}
