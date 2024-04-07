'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AlignJustify } from 'lucide-react';

const Navbar = () => {

    const handleClick = () => {
        if (document.querySelector('.navMenu').classList.contains('top-[-100%]')) {
            document.querySelector('.navMenu').classList.remove('top-[-100%]')
            document.querySelector('.navMenu').classList.add('top-0')
        }
        else {
            document.querySelector('.navMenu').classList.remove('top-0')
            document.querySelector('.navMenu').classList.add('top-[-100%]')
        }
    }

    return (
        <header className="px-4 h-20 fixed top-0 left-0 right-0 bg-white lg:px-6 py-4 lg:py-6 flex justify-between items-center border-b-4 border-slate-400">
            <Link href={'/'}>
                <div className="flex items-center gap-3 space-x-2">
                    <Image
                        alt="Logo"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.jpg"
                        style={{
                            aspectRatio: "40/40",
                            objectFit: "cover",
                        }}
                        width="40"
                    />
                    <h1 className="text-3xl font-bold tracking-normal"><span className="text-gray-600">University</span> Notes</h1>
                </div>
            </Link>

            <div className='sm:hidden fixed top-6 right-4 z-20' onClick={handleClick}>
                <AlignJustify />
            </div>

            <nav className="ml-auto fixed top-[-100%] left-0 mt-20 bg-white justify-center items-center w-screen gap-4 flex flex-col rounded-lg navMenu">
                <Link className="text-lg font-medium hover:underline underline-offset-4 py-2" href={"/"}>
                    Home
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4 py-2" href={"/notes"}>
                    Notes
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4 py-2" href={"/about"}>
                    About
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4 py-2" href={"/contact"}>
                    Contact
                </Link>
            </nav>

            <nav className="ml-auto sm:flex gap-4 sm:gap-6 sm:visible hidden">
                <Link className="text-lg font-medium hover:underline underline-offset-4" href={"/"}>
                    Home
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4" href={"/notes"}>
                    Notes
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4" href={"/about"}>
                    About
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4" href={"/contact"}>
                    Contact
                </Link>
            </nav>
        </header>
    )
}

export default Navbar