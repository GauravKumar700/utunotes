import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className="px-4 lg:px-6 py-4 lg:py-6 flex items-center">
            <div className="flex items-center gap-3 space-x-2 md:pl-7">
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
            <nav className="ml-auto sm:flex gap-4 sm:gap-6 pr-7 sm:visible hidden">
                <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
                    Home
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
                    Notes
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
                    About
                </Link>
                <Link className="text-lg font-medium hover:underline underline-offset-4" href="#">
                    Contact
                </Link>
            </nav>
        </header>
    )
}

export default Navbar