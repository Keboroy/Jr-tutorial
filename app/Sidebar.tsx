"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Home, ArrowLeft, Setting, Calendar, Bookmark, Discovery } from 'react-iconly';
const Sidebar = () => {
    return (
        <div className='h-screen px-7 py-10 dark:bg-[#111315] dark:text-white text-[#000]'>
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
                    <Link href="/">
                        <div className='flex items-center space-x-3 w-60 px-5 py-3 bg-neutral-700 rounded-lg'>
                            <div className=''>
                                <Home set="curved" primaryColor="white" />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>Home</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href="/Discover">
                        <div className='flex items-center space-x-3 w-60 px-5 py-3 hover:bg-neutral-700 rounded-lg'>
                            <div className=''>
                                <Discovery set="curved" primaryColor="white" />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>Discover</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href="/Courses">
                        <div className='flex items-center space-x-3 w-60 px-5 py-3 hover:bg-neutral-700 rounded-lg'>
                            <div className=''>
                                <Bookmark set="curved" primaryColor="white" />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>My Courses</h1>
                            </div>
                        </div>
                    </Link>
                    <Link href="/Timetable">
                        <div className='flex items-center space-x-3 w-60 px-5 py-3 hover:bg-neutral-700 rounded-lg'>
                            <div className=''>
                                <Calendar set="curved" primaryColor="white" />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>My Timetable</h1>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="absolute bottom-4">
                    <Link href="/Settings">
                        <div className='flex items-center space-x-3 w-60 px-5 py-3 bg-indigo-800 hover:bg-indigo-900 hover:bg-opacity-75 bg-opacity-75 rounded-xl'>
                            <div>
                                <Setting set="curved" primaryColor="white" />
                            </div>
                            <div>
                                <h1 className='text-xl font-bold'>Settings</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
