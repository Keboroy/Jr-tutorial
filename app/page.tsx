import Image from 'next/image'
import Link from 'next/link'
import Banner from './Banner'
import Card from './Card'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <div className='hidden md:block'>
        <Banner />
      </div>
      {/* <Card /> */}
      <div className='md:my-5 flex flex-col'>
        <h1 className='text-2xl font-bold my-5'>Courses</h1>
        {/* <div className='flex flex-wrap'>
          <Link href="/Courses/Science">
            <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
              <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={400} className="rounded-t-xl" />
              <div className="p-5 w-80 rounded-b-xl">
                <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
                <h2 className='text-xl font-bold'>Hello world</h2>
                <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </Link>
          <Link href="/Courses/Science">
            <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
              <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={400} className="rounded-t-xl" />
              <div className="p-5 w-80 rounded-b-xl">
                <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
                <h2 className='text-xl font-bold'>Hello world</h2>
                <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </Link>
          <Link href="/Courses/Science">
            <div className='mr-7 my-3 hover:bg-[#2a2a2a] bg-[#212121] rounded-xl'>
              <Image src="https://bit.ly/3Vz8YEY" alt="Thumbnail" width={300} height={400} className="rounded-t-xl" />
              <div className="p-5 w-80 rounded-b-xl">
                <h4 className='text-sm text-slate-300 font-mono'>1hr 30min</h4>
                <h2 className='text-xl font-bold'>Hello world</h2>
                <p className='text-lg text-gray-300'>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </Link>
        </div> */}
        <Card />
      </div>
    </main>
  )
}
