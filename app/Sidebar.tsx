"use client"
import React from 'react';
import { Home, ArrowLeft, Setting, Calendar, Bookmark, Discovery } from 'react-iconly';
const Sidebar = () => {
    return (
        <div className='h-screen px-7 py-10 dark:bg-neutral-900 dark:text-white text-[#000]'>
            <div className='flex space-x-3 items-center' >
                <div className=''>
                    <ArrowLeft set="curved" primaryColor="white" />
                </div>
                <div>
                    <h1 className='text-2xl font-black'>Good Night </h1>
                </div>
            </div>
            <div className="flex flex-col">
                <div className='flex flex-col space-y-3 mt-10'>
                    <div className='flex items-center space-x-3 w-60 px-5 py-3 bg-neutral-700 rounded-lg'>
                        <div className=''>
                            <Home set="curved" primaryColor="white" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Home</h1>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3 w-60 px-5 py-3 hover:bg-neutral-700 rounded-lg'>
                        <div className=''>
                            <Discovery set="curved" primaryColor="white" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Discover</h1>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3 w-60 px-5 py-3 hover:bg-neutral-700 rounded-lg'>
                        <div className=''>
                            <Bookmark set="curved" primaryColor="white" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>My Courses</h1>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3 w-60 px-5 py-3 hover:bg-neutral-700 rounded-lg'>
                        <div className=''>
                            <Calendar set="curved" primaryColor="white" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>My Timetable</h1>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-4">
                    <div className='flex items-center space-x-3 w-60 px-5 py-3 bg-[#296bb5] bg-opacity-50 rounded-lg'>
                        <div>
                            <Setting set="curved" primaryColor="white" />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold'>Settings</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
