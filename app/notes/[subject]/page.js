'use client'
import React, { useState, useEffect } from 'react';
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import `@react-pdf-viewer/core/lib/styles/index.css`
// import `@react-pdf-viewer/default-layout/lib/styles/index.css`

const Page = ({ params }) => {
    const [pdfFile, setpdfFile] = useState(null);
    let data = fetch('http://localhost:3000/api/notes/')

    const subject = params.subject
    const makeFirstLetterCapital = (sentence) => {
        // Split the sentence into an array of words
        const words = sentence.split("-");

        // Loop through each word in the array
        const capitalizedWords = words.map(word => {
            // Capitalize the first letter of each word and concatenate it with the rest of the word
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        // Join the capitalized words back into a sentence
        return capitalizedWords.join(" ");
    }

    return (
        <>
            <div>Your Subject : {params.subject}</div>
            <div className="bg-gray-50 py-6 w-full">
                <div className="container flex items-center justify-center px-4 text-center md:px-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Note Previews</h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Beautifully designed notes for you. Add a touch of elegance to your content.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid container items-center w-full gap-4 py-6 md:grid-cols-2 lg:gap-12 xl:gap-16">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl">{makeFirstLetterCapital(subject)}</h2>
                    <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        A collection of beautifully designed note previews that add a touch of elegance to your content. These notes
                        are perfect for blog posts, documentation, or any other web page where you want to showcase information in
                        style.
                    </p>
                </div>
                <div className="flex items-start justify-center">
                    {/* <img
                        alt="Shimmering Lights"
                        className="aspect-[2/1] overflow-hidden rounded-lg object-cover object-center"
                        height="300"
                        src="/placeholder.jpg"
                        width="600"
                    /> */}
                    <iframe
                        alt="Shimmering Lights"
                        src={"Data-Structure-Algorithm.pdf"}
                        // href="../notes/Data-Structure-Algorithm.pdf"
                        width="100%"
                        height="300px"
                        // className="border-2 border-gray-200 rounded-lg"
                        className='border-4 border-slate-400 aspect-[2/1] overflow-hidden rounded-lg object-cover object-center'
                        title="Notes Preview"
                    ></iframe>

                    {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Viewer fileUrl={data} plugins={[newplugin]} />                        </Worker> */}

                </div>
            </div>

            <div className="container py-12 grid items-start gap-6 px-4 md:gap-12 md:px-6 lg:gap-16">
                <div className="grid items-start gap-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Note Description</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Beautifully designed notes for your website. Add a touch of elegance to your content. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, alias illo est reiciendis nemo cupiditate porro sed blanditiis repudiandae eligendi. Rerum, autem. Cumque, quaerat impedit quam nemo provident iste excepturi! Accusantium voluptatum aperiam iste.
                    </p>
                </div>
            </div>

            <div className='w-full flex justify-center items-center py-8'>
                <a
                    className="inline-flex md:w-96 justify-center items-center rounded-lg border border-gray-200 bg-gray-100 h-10 px-4 text-sm md:text-base font-medium shadow-sm transition-colors hover:bg-gray-300 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="../notes/Data-Structure-Algorithm.docx" download={"Data-Structure-Algorithm.docx"}
                >
                    Download Notes
                </a>
            </div>

            <div className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
                <div className="container grid md:flex items-center justify-center grid-cols-1 md:grid-cols-3 py-12 gap-4 px-4 md:gap-8 md:px-6">
                    <div className="space-y-2 text-center md:col-start-2 md:text-left">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Update About Notes to Your Inbox</h2>
                        <p className="md:max-w-[500px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            Subscribe to our newsletter for the latest news, updates, and special offers on beautifully designed
                            Notion notes.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-end">
                        <Input
                            className="max-w-sm w-full md:max-w-[300px] order-1 md:order-1"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <Button className="order-1 md:order-1">Subscribe</Button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 py-12 w-full">
                <div className="container grid items-center justify-center text-center gap-4 md:gap-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Follow Us</h2>
                        <p className="text-gray-500 dark:text-gray-400">Stay connected</p>
                    </div>
                    <div className="grid gap-4">
                        <Input className="w-[300px]" id="email" placeholder="Email" />
                        <Button type="submit">Subscribe</Button>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-900 py-12 text-sm w-full">
                <div className="container grid items-center justify-center text-center gap-4 text-gray-50 md:gap-8 md:text-gray-50 dark:text-gray-50">
                    © 2024 University Notes. All rights reserved.
                    <Link className="underline hover:text-gray-200" href="#">
                        Privacy Policy
                    </Link>
                    <Link className="underline hover:text-gray-200" href="#">
                        Terms & Conditions
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Page