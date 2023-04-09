"use client"
import React from 'react'
import Image from 'next/image'
import { Setting } from 'react-iconly'

const page = () => {
  return (

    <div className='flex bg-white h-[400px] w-[800px] mx-auto rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'>
      <div>
        <Image src="https://bit.ly/3IdJsB0" alt="poster" height={600} width={500} className=" h-[400px] w-[300px] object-cover rounded-l-xl" />
      </div>
      <div className='p-10 mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-black text-black my-5'>Sign in</h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="text-black">What is your name?</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-ghost max-w-md w-84" />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="text-black">What is your Email?</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-ghost max-w-md w-84" />
        </div>
      </div>
    </div>
  )
}

export default page
