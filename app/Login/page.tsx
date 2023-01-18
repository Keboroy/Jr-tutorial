"use client"
import React from 'react'
import { Setting } from 'react-iconly'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className='text-3xl font-bold my-3'>Login</h1>
      <div>

      </div>
      <div className='flex flex-col justify-center items-center bg-white rounded-2xl text-[#0e0e0e] p-5 w-96'>
        <h1 className='text-3xl font-bold my-3'>Welcome Back</h1>
        <p>Don’t have an account? <span className='underline'>Start for free</span></p>

        <div className="grid p-3 card rounded-box place-items-center">
          <div className='flex space-x-2 pt-3'>
            <button>Google</button>
            <button>Facebook</button>
          </div>
        </div>

        <div className="divider">or</div>

        <div className="grid p-3 card rounded-box place-items-center">

          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-base text-[#0e0e0e] font-medium">Enter Your Email?</span>
            </label>
            <input type="email" placeholder="Type here" className="input text-base hover:border-2 hover:border-[#0e0e0e] input-bordered bg-[#e9e9e9] text-[#0e0e0e]" />
          </div>

          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-base text-[#0e0e0e] font-medium">Enter Your Password?</span>
            </label>
            <input type="password" placeholder="Type here" className="text-base input hover:border-2 hover:border-[#0e0e0e] input-bordered bg-[#e9e9e9] text-[#0e0e0e]" />
          </div>

          <button className='items-center justify-center p-3 mt-5 space-x-3 w-60 bg-indigo-800 hover:bg-indigo-900 hover:bg-opacity-75 bg-opacity-75 rounded-xl'>
            <h1 className='text-lg font-medium'>Log in</h1>
          </button>

        </div>

      </div>
    </div>
  )
}

export default page
