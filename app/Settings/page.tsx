import React from 'react'
import Image from "next/image"
const page = () => {
  return (
    <div className='my-5'>
      <h1 className='text-2xl font-bold my-5 hover:text-[#e4e4e4]'>My Profile</h1>
      <div className='my-7  '>
        <div className='flex space-x-10'>
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <Image src="https://bit.ly/3Ql5YKK" alt="Avatar" height={100} width={100} />
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" value="Kena Roy" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-[#1a1a1a]" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input type="email" value="KenaRoy@outlook.com" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-[#1a1a1a]" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Your Number</span>
            </label>
            <input type="text" value="9595161645" placeholder="Type here" className="input input-bordered w-full max-w-xs bg-[#1a1a1a]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
